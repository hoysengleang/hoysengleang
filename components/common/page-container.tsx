import React from "react";
import { ClientPageWrapper } from "./client-page-wrapper";
import PageHeader from "./page-header";

interface PageContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function PageContainer({
  title,
  description,
  children,
}: PageContainerProps) {
  return (
    <ClientPageWrapper>
      <div>
        <PageHeader title={title} description={description} className="print:hidden" />
        <div className="mx-3 sm:mx-4 md:mx-6 print:mx-0">{children}</div>
      </div>
    </ClientPageWrapper>
  );
}
