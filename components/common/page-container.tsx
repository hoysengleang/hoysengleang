import React from "react";

import { ClientPageWrapper } from "./client-page-wrapper";
import PageHeader from "./page-header";

interface PageContainerProps {
  title: string;
  description: string;
  eyebrow?: string;
  children: React.ReactNode;
}

export default function PageContainer({
  title,
  description,
  eyebrow,
  children,
}: PageContainerProps) {
  const hasHeader = title.trim().length > 0 || description.trim().length > 0;

  return (
    <ClientPageWrapper>
      <div className="page-shell">
        {hasHeader ? (
          <PageHeader
            title={title}
            description={description}
            eyebrow={eyebrow}
            className="print:hidden"
          />
        ) : null}
        <div className="pt-10 sm:pt-12 print:pt-0">{children}</div>
      </div>
    </ClientPageWrapper>
  );
}
