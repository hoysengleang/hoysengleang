import { ReactNode } from "react";

interface ClientPageWrapperProps {
  children: ReactNode;
}

// A light CSS fade-in. Content is server-rendered and readable without JavaScript.
export const ClientPageWrapper = ({ children }: ClientPageWrapperProps) => {
  return <div className="rise w-full">{children}</div>;
};
