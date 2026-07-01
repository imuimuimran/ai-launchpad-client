"use client";

import { Bell } from "lucide-react";

import ThemeToggle from "../common/theme-toggle";

import ProfileDropdown from "./profile-dropdown";

import { Button } from "@/components/ui/button";

export default function DashboardNavbar() {
  return (
    <header
      className="
      flex
      items-center
      justify-between
      border-b
      px-6
      py-4
      "
    >
      <h1
        className="
        text-2xl
        font-bold
        "
      >
        Dashboard
      </h1>

      <div
        className="
        flex
        items-center
        gap-3
        "
      >
        <ThemeToggle />

        <Button
          variant="ghost"
          size="icon"
        >
          <Bell className="h-5 w-5" />
        </Button>

        <ProfileDropdown />
      </div>
    </header>
  );
}