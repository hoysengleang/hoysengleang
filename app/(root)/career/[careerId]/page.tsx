import { Metadata } from "next";
import { redirect } from "next/navigation";

import RoleDetail from "@/components/career/role-detail";
import { careerExperiences } from "@/config/career";
import { siteConfig } from "@/config/site";

interface CareerDetailPageProps {
  params: {
    careerId: string;
  };
}

export function generateStaticParams() {
  return careerExperiences.map((career) => ({ careerId: career.id }));
}

export function generateMetadata({ params }: CareerDetailPageProps): Metadata {
  const career = careerExperiences.find((c) => c.id === params.careerId);
  if (!career) {
    return { title: "Role Not Found" };
  }
  return {
    title: `${career.position} at ${career.company}`,
    description: career.description[0],
    alternates: { canonical: `${siteConfig.url}/career/${career.id}` },
  };
}

export default function CareerDetailPage({ params }: CareerDetailPageProps) {
  const career = careerExperiences.find((c) => c.id === params.careerId);

  if (!career) {
    redirect("/career");
  }

  return (
    <RoleDetail
      role={career}
      backHref="/career"
      backLabel="All experience"
      descriptionHeading="What I do"
      achievementsHeading="What came of it"
    />
  );
}
