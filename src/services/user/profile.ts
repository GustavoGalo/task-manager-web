import { queryOptions } from "@tanstack/react-query";

import { api } from "@/services/api";
import { Profile } from "@/interfaces/profile";

export async function profile() {
  const response = await api.get<Profile>("/user/profile")

  return response.data
}

export const profileQueryOptions = () => queryOptions({
  queryFn: () => profile(),
  queryKey: ['user-profile'],
})

