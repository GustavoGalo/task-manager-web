import { useMutation, UseMutationOptions } from "@tanstack/react-query"

import { api } from "../api"
import { AxiosError } from "axios"
import { SignUpApiResponse, SignUpBody, SignUpApiError } from "./types"

export const signUp = async (body: SignUpBody) => {
  const response = await api.post<SignUpApiResponse>("/auth/signUp", body)

  return response.data
}

export const useSignUp = (options?: UseMutationOptions<SignUpApiResponse, AxiosError<SignUpApiError>, SignUpBody>) => useMutation({
  mutationFn: async (body) => await signUp(body),
  ...options
})