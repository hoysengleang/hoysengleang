export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export const routesConfig: { mainNav: NavItem[] } = {
  mainNav: [
    {
      title: "Work",
      href: "/experience",
    },
    {
      title: "Open source",
      href: "/contributions",
    },
    {
      title: "Writing",
      href: "/blog",
    },
    {
      title: "Résumé",
      href: "/resume",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
};
