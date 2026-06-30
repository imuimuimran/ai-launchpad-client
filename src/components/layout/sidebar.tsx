"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { userSidebarLinks, adminSidebarLinks } from "@/constants/navigation";
// 1. Import your user context hook
import { useUserContext } from "@/context/user-context"; 

export default function Sidebar() {
  const pathname = usePathname();
  
  // 2. Fetch the cached user database records and loading state
  const { data: user, isLoading } = useUserContext();

  // 3. Dynamically swap sidebar menus based on the verified role from MongoDB
  const links =
    user?.role === "admin" 
      ? adminSidebarLinks 
      : userSidebarLinks;

  // 4. Handle a subtle layout state while your authentication checks clear
  if (isLoading) {
    return (
      <aside className="w-64 border-r animate-pulse">
        <div className="p-4 space-y-4">
          <div className="h-10 bg-muted rounded-lg w-full" />
          <div className="h-10 bg-muted rounded-lg w-full" />
          <div className="h-10 bg-muted rounded-lg w-full" />
          <div className="h-10 bg-muted rounded-lg w-full" />
        </div>
      </aside>
    );
  }

  // 5. If the user isn't logged in at all, hide the sidebar completely 
  if (!user) return null;

  return (
    <aside className="w-64 border-r min-h-[calc(100vh-4rem)]">
      <nav className="p-4 space-y-2">
        {links.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg p-2 text-sm font-medium transition-colors hover:bg-muted/50 ${
                active ? "bg-muted text-foreground" : "text-muted-foreground"
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
