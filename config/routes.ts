export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export const routesConfig: { mainNav: NavItem[] } = {
  mainNav: [
    {
      title: "Projects",
      href: "/experience",
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
