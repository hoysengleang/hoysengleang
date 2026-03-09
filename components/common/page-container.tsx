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
  const hasHeader = title.trim().length > 0 || description.trim().length > 0;

  return (
    <ClientPageWrapper>
      <div className="space-y-6 sm:space-y-8">
        {hasHeader ? (
          <PageHeader title={title} description={description} className="print:hidden" />
        ) : null}
        <div className="px-1 sm:px-2 md:px-3 print:mx-0">{children}</div>
      </div>
    </ClientPageWrapper>
  );
}
