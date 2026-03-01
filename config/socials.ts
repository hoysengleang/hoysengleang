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
    color: "#F0F6FC",
  },
  {
    name: "LinkedIn",
    username: "hoysengleang",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/hoysengleang",
    color: "#0A66C2",
  },
  {
    name: "Twitter",
    username: "@hoysengleang",
    icon: Icons.twitter,
    link: "https://twitter.com/hoysengleang",
    color: "#1DA1F2",
  },
  {
    name: "Gmail",
    username: "hoysengleang",
    icon: Icons.gmail,
    link: "mailto:hoysengleang617@gmail.com",
    color: "#EA4335",
  },
];
