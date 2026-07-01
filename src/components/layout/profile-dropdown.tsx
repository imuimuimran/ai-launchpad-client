"use client";

import Link from "next/link";

import { useClerk } from "@clerk/nextjs";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";

import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function ProfileDropdown() {
  const { signOut } = useClerk();

  const { user } = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="gap-2"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={user?.image}
            />

            <AvatarFallback>
              {user?.name?.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <span className="hidden md:block">
            {user?.name}
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">

        <DropdownMenuItem asChild>
          <Link href="/dashboard/profile">
            Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/dashboard">
            Dashboard
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/dashboard/settings">
            Settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => signOut()}
        >
          Logout
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  );
}