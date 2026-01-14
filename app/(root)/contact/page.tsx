import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ContactInfoCard from "@/components/contact/contact-info-card";
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <ContactForm />
        </div>
        <div className="flex-1 flex justify-center items-start pt-8 lg:pt-0">
          <ContactInfoCard />
        </div>
      </div>
    </PageContainer>
  );
}
