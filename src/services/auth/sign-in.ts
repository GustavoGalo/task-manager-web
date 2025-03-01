import { useMutation, UseMutationOptions } from "@tanstack/react-query"

import { api } from "../api"
import { SignInApiError, SignInApiResponse, SignInBody } from "./types"
import { AxiosError } from "axios"

export const signIn = async (body: SignInBody) => {
  const response = await api.post<SignInApiResponse>("/auth/signIn", body)

  return response.data
}

export const useSignIn = (options?: UseMutationOptions<SignInApiResponse, AxiosError<SignInApiError>, SignInBody>) => useMutation({
  mutationFn: async (body) => await signIn(body),
  ...options
})