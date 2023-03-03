import FooterApplePodcastIcon from "@components/atoms/FooterApplePodcastIcon";
import FooterGooglePodcastIcon from "@components/atoms/FooterGooglePodcastIcon";
import FooterSouncloudPodcastIcon from "@components/atoms/FooterSouncloudPodcastIcon";
import FooterSpotifyPodcastIcon from "@components/atoms/FooterSpotifyPodcastIcon";
import { ReactNode } from "react";

export type FooterItemInterfaceData = {
  title?: string;
  link: string;
  hasIcon?: ReactNode;
};
export type FooterItemInterface = {
  title: string;
  data: FooterItemInterfaceData[];
};

const FOOTER_NAVS: FooterItemInterface[] = [
  {
    title: "Pages",
    data: [
      {
        title: "Home",
        link: "#",
      },
      {
        title: "Podcast",
        link: "#",
      },
      {
        title: "Host",
        link: "#",
      },
      {
        title: "Blog",
        link: "#",
      },
    ],
  },
  {
    title: "Reach Us",
    data: [
      {
        title: "Contact",
        link: "#",
      },
      {
        title: "About",
        link: "/about",
      },
    ],
  },
  {
    title: "Subscribe",
    data: [
      {
        hasIcon: <FooterApplePodcastIcon />,
        link: "#",
      },
      {
        hasIcon: <FooterGooglePodcastIcon />,
        link: "#",
      },
      {
        hasIcon: <FooterSouncloudPodcastIcon />,
        link: "#",
      },
      {
        hasIcon: <FooterSpotifyPodcastIcon />,
        link: "#",
      },
    ],
  },
];

export default FOOTER_NAVS;
