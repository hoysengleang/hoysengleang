import { Metadata } from "next";
import { redirect } from "next/navigation";

import RoleDetail from "@/components/career/role-detail";
import { education } from "@/config/career";
import { siteConfig } from "@/config/site";

interface EducationDetailPageProps {
  params: {
    educationId: string;
  };
}

export function generateStaticParams() {
  return education.map((item) => ({ educationId: item.id }));
}

export function generateMetadata({ params }: EducationDetailPageProps): Metadata {
  const item = education.find((e) => e.id === params.educationId);
  if (!item) {
    return { title: "Not Found" };
  }
  return {
    title: `${item.position}, ${item.company}`,
    description: item.description[0],
    alternates: { canonical: `${siteConfig.url}/education/${item.id}` },
  };
}

export default function EducationDetailPage({ params }: EducationDetailPageProps) {
  const item = education.find((e) => e.id === params.educationId);

  if (!item) {
    redirect("/");
  }

  return (
    <RoleDetail
      role={item}
      backHref="/#experience"
      backLabel="Home"
      descriptionHeading="What I studied"
      achievementsHeading="What I took away"
    />
  );
}
