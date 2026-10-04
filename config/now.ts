// A short, dated note on what I'm doing right now. Update `updatedAt` whenever
// the list changes so visitors can see how fresh it is.

export interface NowItem {
  label: string;
  text: string;
  href?: string;
}

export const nowConfig: { updatedAt: Date; items: NowItem[] } = {
  updatedAt: new Date("2026-10-04"),
  items: [
    {
      label: "Work",
      text: "Building web admin systems and APIs in Laravel and NestJS at Peng Huoth Group, and running their staging and production servers.",
    },
    {
      label: "Building",
      text: "free-remote, a remote desktop tool in Rust where every input is permission-checked.",
      href: "/experience/free-remote",
    },
    {
      label: "Next",
      text: "Turning OpenVisionSearch into a multi-tenant product search API: one result per product, not per image.",
      href: "/experience/openvisionsearch",
    },
    {
      label: "Learning",
      text: "Systems programming in Rust, and measuring search and answer quality before changing defaults.",
    },
  ],
};
