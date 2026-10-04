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
      title="Say hello"
      description={pagesConfig.contact.description}
    >
      <ContactUnified />
    </PageContainer>
  );
}
