export interface IResponse {
  error: boolean
  message: string
  errorField: string | null
  res: string | null
}

export interface ISuccessResponse {
  message: string
  errorField?: string | null
  res?: string | null
}
export interface IErrorResponse {
  message: string
  errorField?: string | null
  res?: string | null
}