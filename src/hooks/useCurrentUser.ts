import { useUser } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "@/services/axios";

export function useCurrentUser() {
  const { user } = useUser();

  return useQuery({
    queryKey: ["current-user", user?.id],

    enabled: !!user,

    queryFn: async () => {
      const res = await axiosInstance.get(`/users/${user?.id}`);

      return res.data.data;
    },
  });
}