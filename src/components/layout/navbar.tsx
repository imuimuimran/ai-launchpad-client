import Link from "next/link";

import ThemeToggle from "../common/theme-toggle";
import MobileNav from "./mobile-nav";

import { publicNavLinks } from "@/constants/navigation";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-xl"
        >
          AI LaunchPad
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {publicNavLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Area */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          <div className="hidden md:flex gap-4">
            <Link href="/sign-in">
              Sign In
            </Link>

            <Link href="/sign-up">
              Get Started
            </Link>
          </div>

          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}