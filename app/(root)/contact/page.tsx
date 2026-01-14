import { Metadata } from "next";
import PageContainer from "@/components/common/page-container";
import ContactUnified from "@/components/contact/contact-unified";
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
      <div className="flex justify-center items-center min-h-[50vh]">
        <ContactUnified />
      </div>
    </PageContainer>
  );
}
