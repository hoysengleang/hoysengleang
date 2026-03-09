import { Icons } from "@/components/common/icons";

export interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
  color?: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@hoysengleang",
    icon: Icons.gitHub,
    link: "https://github.com/hoysengleang",
    color: "hsl(var(--foreground))",
  },
  {
    name: "LinkedIn",
    username: "hoysengleang",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/hoysengleang",
    color: "#0A66C2",
  },
  {
    name: "Telegram",
    username: "@houysengleang",
    icon: Icons.telegram,
    link: "https://t.me/houysengleang",
    color: "#229ED9",
  },
  {
    name: "Gmail",
    username: "hoysengleang",
    icon: Icons.gmail,
    link: "mailto:hoysengleang617@gmail.com",
    color: "#EA4335",
  },
];
