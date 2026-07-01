"use client";

import { ReactNode } from "react";

import Unauthorized from "./unauthorized";

import { useUserContext } from "@/context/user-context";

type UserRole =
  | "user"
  | "manager"
  | "admin";

interface RoleGuardProps {
  children: ReactNode;

  roles: UserRole[];
}

export default function RoleGuard({
  children,
  roles,
}: RoleGuardProps) {
  const {
    data: user,
    isLoading,
  } = useUserContext();

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        {/* You can drop a ShadCN Spinner or Lucide Loader icon here later */}
        <div className="text-center font-medium text-muted-foreground animate-pulse">
          Verifying permissions...
        </div>
      </div>
    );
  }

  if (!user) {
    return <Unauthorized />;
  }

  if (!roles.includes(user.role)) {
    return <Unauthorized />;
  }

  return <>{children}</>;
}