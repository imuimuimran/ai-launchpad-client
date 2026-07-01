import {
  Home,
  User,
  Bot,
  FileText,
  Users,
  BarChart3,
  Settings,
  ClipboardList,
  ScrollText,
} from "lucide-react";

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

export const managerSidebarLinks = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "Review Queue",
    href: "/dashboard/review-queue",
    icon: ClipboardList,
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
];

export const adminSidebarLinks = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "Users",
    href: "/dashboard/users",
    icon: Users,
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    label: "AI Logs",
    href: "/dashboard/ai-logs",
    icon: ScrollText,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];