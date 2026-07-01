"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { userSidebarLinks } from "@/constants/navigation";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>

      <SheetContent side="left">
        <div className="mt-8 flex flex-col gap-4">
          {userSidebarLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-4 flex flex-col gap-2">
            <Link href="/sign-in">
              Sign In
            </Link>

            <Link href="/sign-up">
              Get Started
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}