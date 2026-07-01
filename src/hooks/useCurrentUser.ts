import { useAuth } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";

export function useCurrentUser() {
  const { getToken, isSignedIn } = useAuth();

  const query = useQuery({
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

  // Spread the query properties and alias "data" as "user"
  return {
    ...query,
    user: query.data,
  };
}
