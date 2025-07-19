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
    username: "Hoysengleang",
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
    username: "naman.barkiya02",
    icon: Icons.gmail,
    link: "mailto:naman.barkiya02@gmail.com",
  },
];
