import importlib.util
import hashlib
import unittest
import zipfile
from pathlib import Path

import fitz


ROOT = Path(__file__).resolve().parents[1]
GENERATOR = ROOT / "tools" / "generate_atea_pack.py"
CLIENT_GENERATOR = ROOT / "tools" / "generate_atea_client_pack.py"
WORKSPACE = ROOT.parent
CLIENT_OUTPUT = WORKSPACE / "output" / "client_final"
CLIENT_CV = CLIENT_OUTPUT / "01_CV_Aymen_Khaled_Developpeur_Full_Stack_LMS_FR.pdf"
CLIENT_PORTFOLIO = CLIENT_OUTPUT / "02_Portfolio_Technique_LMS_Aymen_Khaled.pdf"
CLIENT_DIPLOMA = CLIENT_OUTPUT / "03_Justificatifs" / "Diplome_Licence_Big_Data_Analyse_Donnees.png"
CLIENT_ZIP = WORKSPACE / "output" / "ATEA_Aymen_Khaled_Dossier_Client_Final.zip"
SOURCE_DIPLOMA = Path(r"C:\Users\khale\Downloads\diplome.PNG")


def pdf_text(path: Path) -> tuple[int, str]:
    if not path.exists():
        raise AssertionError(f"Client PDF has not been generated: {path}")
    document = fitz.open(path)
    return len(document), "\n".join(page.get_text() for page in document)


class AteaPackContractTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        if not GENERATOR.exists():
            raise AssertionError("ATEA pack generator has not been implemented")
        spec = importlib.util.spec_from_file_location("generate_atea_pack", GENERATOR)
        cls.module = importlib.util.module_from_spec(spec)
        assert spec.loader is not None
        spec.loader.exec_module(cls.module)

        if not CLIENT_GENERATOR.exists():
            raise AssertionError("ATEA client pack generator has not been implemented")
        client_spec = importlib.util.spec_from_file_location("generate_atea_client_pack", CLIENT_GENERATOR)
        cls.client_module = importlib.util.module_from_spec(client_spec)
        assert client_spec.loader is not None
        client_spec.loader.exec_module(cls.client_module)

    def test_required_artifact_names_are_stable(self):
        expected = {
            "pdf/CV_Aymen_Khaled_ATEA_FR.pdf",
            "docx/CV_Aymen_Khaled_ATEA_FR.docx",
            "pdf/Dossier_Expert_Technique_Aymen_Khaled_ATEA.pdf",
            "pdf/Annexe_Visuelle_Demonstrateur_LMS_ATEA.pdf",
            "pdf/Architecture_LMS_Sur_Mesure_ATEA.pdf",
            "docx/Corrections_Proposition_Mehdi_ATEA.docx",
            "pdf/Corrections_Proposition_Mehdi_ATEA.pdf",
            "checklists/Pieces_Justificatives_Manquantes_ATEA.md",
            "README_ENVOI.md",
        }
        self.assertEqual(set(self.module.required_artifacts()), expected)

    def test_role_is_truthful_and_moodle_claim_is_absent(self):
        role = self.module.proposed_role()
        self.assertIn("Développeur Full-Stack", role)
        self.assertNotIn("Expert Moodle", role)
        self.assertNotIn("Expert LMS et Digital Learning", role)

    def test_unrelated_person_is_excluded(self):
        for path in self.module.required_artifacts():
            self.assertNotIn("Ahmed", path)
            self.assertNotIn("Benyahia", path)

    def test_final_client_cv_is_complete_and_has_no_internal_review_language(self):
        page_count, text = pdf_text(CLIENT_CV)
        self.assertEqual(page_count, 2)

        required_content = [
            "Everything to Gain",
            "Strategy Navigator",
            "JourneyAI",
            "SaleSide AI",
            "RxCare",
            "Integrity Solve",
            "Aziin Engineering Solution",
            "SAC Marquage",
            "Proged",
            "Job Scraper",
            "AutoSEO",
            "AutoTN",
            "E-Commerce Dashboard",
            "Licence en Big Data",
            "JavaScript Algorithms",
            "Arabe",
            "Français",
            "Anglais",
        ]
        for expected in required_content:
            self.assertIn(expected, text)

        prohibited_content = [
            "selon le CV fourni",
            "fichiers fournis",
            "copies à joindre",
            "faute d'attestation",
            "aucune expérience",
            "document de travail",
            "Moodle",
        ]
        for prohibited in prohibited_content:
            self.assertNotIn(prohibited.casefold(), text.casefold())

    def test_final_portfolio_has_no_internal_review_language(self):
        page_count, text = pdf_text(CLIENT_PORTFOLIO)
        self.assertGreaterEqual(page_count, 8)
        self.assertIn("EduNova", text)
        self.assertIn("Architecture technique", text)
        for prohibited in [
            "selon le CV fourni",
            "fichiers fournis",
            "copies à joindre",
            "faute d'attestation",
            "aucune expérience",
            "document de travail",
            "Moodle",
        ]:
            self.assertNotIn(prohibited.casefold(), text.casefold())

    def test_final_client_zip_has_two_documents_and_separate_diploma(self):
        if not CLIENT_ZIP.exists():
            self.fail(f"Client ZIP has not been generated: {CLIENT_ZIP}")
        expected = {
            "01_CV_Aymen_Khaled_Developpeur_Full_Stack_LMS_FR.pdf",
            "02_Portfolio_Technique_LMS_Aymen_Khaled.pdf",
            "03_Justificatifs/Diplome_Licence_Big_Data_Analyse_Donnees.png",
        }
        with zipfile.ZipFile(CLIENT_ZIP) as archive:
            self.assertEqual(set(archive.namelist()), expected)
            self.assertIsNone(archive.testzip())

        self.assertTrue(SOURCE_DIPLOMA.exists())
        self.assertTrue(CLIENT_DIPLOMA.exists())
        source_hash = hashlib.sha256(SOURCE_DIPLOMA.read_bytes()).hexdigest()
        copied_hash = hashlib.sha256(CLIENT_DIPLOMA.read_bytes()).hexdigest()
        self.assertEqual(source_hash, copied_hash)

    def test_portfolio_table_headers_use_white_text(self):
        styles = self.client_module.portfolio_styles()
        self.assertIn("table_header", styles)
        self.assertEqual(styles["table_header"].textColor, self.client_module.WHITE)


if __name__ == "__main__":
    unittest.main()
