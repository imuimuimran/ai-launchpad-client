"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  userSidebarLinks,
  adminSidebarLinks,
} from "@/constants/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const role = "user";
  // later from Clerk

  // const links =
  //   role === "admin"
  //     ? adminSidebarLinks
  //     : userSidebarLinks;

  // src/components/layout/sidebar.tsx

  const links =
    (role as string) === "admin"
      ? adminSidebarLinks
      : userSidebarLinks;


  return (
    <aside className="w-64 border-r">
      <nav className="p-4 space-y-2">
        {links.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg p-2 ${active
                  ? "bg-muted"
                  : ""
                }`}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}