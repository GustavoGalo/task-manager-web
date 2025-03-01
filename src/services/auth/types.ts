export interface SignInBody {
  email: string
  password: string
}

export interface SignInApiResponse {
  token: string
}

export interface SignInApiError {
  message: string,
  error: string,
  statusCode: number
}