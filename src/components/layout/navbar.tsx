"use client"; // 1. Crucial: Context hooks must be used in a Client Component

import Link from "next/link";
import ThemeToggle from "../common/theme-toggle";
import MobileNav from "./mobile-nav";
import { publicNavLinks } from "@/constants/navigation";
// 2. Import your user context hook
import { useUserContext } from "@/context/user-context"; 

export default function Navbar() {
  // 3. Pull the cached user profile data and loading status
  const { data: user, isLoading } = useUserContext();

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl">
          AI LaunchPad
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {publicNavLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium hover:underline">
              {item.label}
            </Link>
          ))}
          
          {/* 4. Role-based Navigation: Show Admin Panel link only to admins */}
          {user?.role === "admin" && (
            <Link href="/admin/dashboard" className="text-sm font-semibold text-red-500 hover:underline">
              Admin Panel
            </Link>
          )}
        </nav>

        {/* Right Area */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Desktop Auth State */}
          <div className="hidden md:flex items-center gap-4">
            {isLoading ? (
              // Show a small placeholder text while fetching authentication state
              <span className="text-xs text-muted-foreground animate-pulse">Loading...</span>
            ) : user ? (
              // 5. If logged in, show user profile info
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-muted-foreground">
                  {user.name}
                </span>
                {user.image && (
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-8 h-8 rounded-full border shadow-sm object-cover"
                  />
                )}
              </div>
            ) : (
              // 6. If logged out, show traditional onboarding buttons
              <>
                <Link href="/sign-in" className="text-sm font-medium hover:underline">
                  Sign In
                </Link>
                <Link 
                  href="/sign-up" 
                  className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
