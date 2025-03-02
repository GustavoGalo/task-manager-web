import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { api } from "../api";
import { ListAllProjectsApiResponse } from "./types";
import { AxiosError } from "axios";

async function listAllProjects() {
  const response = await api.get<ListAllProjectsApiResponse>("/project")

  return response.data
}

export const useListAllProjects = (options?: UseQueryOptions<ListAllProjectsApiResponse, AxiosError>) => useQuery({
  queryFn: async () => await listAllProjects(),
  queryKey: ['list-all-projects'],
  ...options
})
