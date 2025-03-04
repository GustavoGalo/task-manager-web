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

export interface SignUpBody {
  email: string
  password: string
  name: string
  username: string
}

export interface SignUpApiResponse {
  email: string
  name: string
  username: string
}

export interface SignUpApiError {
  message: string,
  error: string,
  statusCode: number
}