import importlib.util
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
GENERATOR = ROOT / "tools" / "generate_atea_pack.py"


class AteaPackContractTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        if not GENERATOR.exists():
            raise AssertionError("ATEA pack generator has not been implemented")
        spec = importlib.util.spec_from_file_location("generate_atea_pack", GENERATOR)
        cls.module = importlib.util.module_from_spec(spec)
        assert spec.loader is not None
        spec.loader.exec_module(cls.module)

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


if __name__ == "__main__":
    unittest.main()
