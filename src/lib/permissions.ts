import { USER_ROLES } from "@/constants/roles";

export const isAdmin = (
  role?: string
) => {
  return role === USER_ROLES.ADMIN;
};

export const isManager = (
  role?: string
) => {
  return role === USER_ROLES.MANAGER;
};