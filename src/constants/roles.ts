export const USER_ROLES = {
  USER: "user",
  MANAGER: "manager",
  ADMIN: "admin",
} as const;

export type UserRole =
  (typeof USER_ROLES)[keyof typeof USER_ROLES];