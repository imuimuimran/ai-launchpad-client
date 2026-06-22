import {
  Home,
  User,
  Bot,
  FileText,
  Users,
  BarChart3,
  Settings,
} from "lucide-react";

import { ROUTES } from "./routes";

export const publicNavLinks = [
  {
    label: "Home",
    href: ROUTES.HOME,
  },
  {
    label: "Explore",
    href: ROUTES.EXPLORE,
  },
  {
    label: "Blog",
    href: ROUTES.BLOG,
  },
  {
    label: "About",
    href: ROUTES.ABOUT,
  },
  {
    label: "Contact",
    href: ROUTES.CONTACT,
  },
];

export const userSidebarLinks = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "My Contents",
    href: "/dashboard/my-contents",
    icon: FileText,
  },
  {
    label: "AI Assistant",
    href: "/dashboard/assistant",
    icon: Bot,
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
];

export const adminSidebarLinks = [
  {
    label: "Users",
    href: "/dashboard/admin/users",
    icon: Users,
  },
  {
    label: "Analytics",
    href: "/dashboard/admin/analytics",
    icon: BarChart3,
  },
  {
    label: "Settings",
    href: "/dashboard/admin/settings",
    icon: Settings,
  },
];