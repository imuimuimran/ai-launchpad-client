"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useUserContext } from "@/context/user-context";
import {
  userSidebarLinks,
  managerSidebarLinks,
  adminSidebarLinks,
} from "@/constants/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const { data: user, isLoading } = useUserContext();

  // Loading State
  if (isLoading) {
    return (
      <aside className="w-64 border-r p-6">
        Loading...
      </aside>
    );
  }

  // If the user isn't logged in at all, do not render the sidebar
  if (!user) return null;

  // Determine Links using the recommended role-to-links map
  const sidebarLinks = {
    user: userSidebarLinks,
    manager: managerSidebarLinks,
    admin: adminSidebarLinks,
  } as const;

  const links = sidebarLinks[user.role as keyof typeof sidebarLinks] ?? userSidebarLinks;

  return (
    <aside className="w-64 border-r min-h-[calc(100vh-4rem)] p-4">
      <nav className="space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-4 py-2 transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted text-muted-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
