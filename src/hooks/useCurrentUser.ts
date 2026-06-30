// import { useUser } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";

// import { axiosInstance } from "@/services/axios";
import api from "@/lib/axios";

// export function useCurrentUser() {
//   const { user } = useUser();

//   return useQuery({
//     queryKey: ["current-user", user?.id],

//     enabled: !!user,

//     queryFn: async () => {
//       const res = await axiosInstance.get(`/users/${user?.id}`);

//       return res.data.data;
//     },
//   });
// }


export function useCurrentUser() {
  const { getToken, isSignedIn } = useAuth();

  return useQuery({
    queryKey: ["current-user"],

    enabled: !!isSignedIn,

    queryFn: async () => {
      const token = await getToken();

      const response = await api.get(
        "/webhooks/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data.data;
    },
  });
}