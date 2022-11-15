import { IProfile } from "./IProfile"

export interface ILoginRequest {
  email: string
  password: string
}

export interface IRegisterRequest extends ILoginRequest {
  firstName: string
  lastName: string
  phone: string
}

export interface IAuthResponse {
  access_token: string
  profile: IProfile
}