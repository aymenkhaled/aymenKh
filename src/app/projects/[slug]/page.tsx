import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import { caseStudies } from "@/data/caseStudies";
import { data } from "@/data/portfolio";
import { toSlug } from "@/lib/slug";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = data.projects.find((p) => toSlug(p.title) === slug);
  if (!project) return {};
  return { title: `${project.title} | Aymen Khaled`, description: project.description, alternates: { canonical: `/projects/${slug}` } };
}

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) notFound();
  const project = data.projects.find((p) => toSlug(p.title) === slug);
  return <CaseStudyTemplate study={study} project={project} />;
}
