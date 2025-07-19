import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@hoysengleang",
    icon: Icons.gitHub,
    link: "https://github.com/hoysengleang",
  },
  {
    name: "LinkedIn",
    username: "hoysengleang",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/hoysengleang",
  },
  {
    name: "Twitter",
    username: "@hoysengleang",
    icon: Icons.twitter,
    link: "https://twitter.com/hoysengleang",
  },
  {
    name: "Gmail",
    username: "hoysengleang",
    icon: Icons.gmail,
    link: "mailto:hoysengleang617@gmail.com",
  },
];
