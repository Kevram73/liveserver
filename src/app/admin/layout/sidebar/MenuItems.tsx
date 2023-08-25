import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
  IconGlobe,
  IconUser,
  IconAdjustmentsAlt,
  IconMessageCircle2,
  IconDeviceTv,
  IconClipboard,
  IconInbox,
  IconSettingsFilled

} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "SECTIONS",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/admin/",
  },
  {
    id: uniqueId(),
    title: "Country",
    icon: IconGlobe,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Gender",
    icon: IconUser,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Slider",
    icon: IconAdjustmentsAlt,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Comments",
    icon: IconMessageCircle2,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Movie::Videos",
    icon: IconDeviceTv,
    href: "",
  },
  {
    id: uniqueId(),
    title: "Movie Scrapper",
    icon: IconDeviceTv,
    href: "",
  },
  {
    id: uniqueId(),
    title: "TV Series",
    icon: IconDeviceTv,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "TV Live",
    icon: IconDeviceTv,
    href: "/sample-page",
  },
  {
    id: uniqueId(),
    title: "Pages",
    icon: IconClipboard,
    href: "/sample-page",
  },
  {
    id: uniqueId(),
    title: "Post",
    icon: IconInbox,
    href: "/sample-page",
  },
  {
    id: uniqueId(),
    title: "Actor/Director",
    icon: IconUser,
    href: "/sample-page",
  },
  {
    id: uniqueId(),
    title: "Users",
    icon: IconUser,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Settings",
    icon:  IconSettingsFilled,
    href: "/",
  },
  
];

export default Menuitems;
