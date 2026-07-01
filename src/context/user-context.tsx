"use client";

import { createContext, useContext } from "react";
import { useCurrentUser } from "@/hooks/useCurrentUser";

// 1. Extract the exact return type of your hook
type UserContextType = ReturnType<typeof useCurrentUser>;

// 2. Pass the type to createContext and default to null
const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const query = useCurrentUser();

  return (
    <UserContext.Provider value={query}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  
  // Safety check to ensure hook is used inside a Provider wrapper
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  
  return context;
}
