import { IAuthResponse, ILoginRequest, IRegisterRequest } from "../types/IAuth"
import { instance } from "./instance"


export const authAPI = {
  login: async (body: ILoginRequest) => {
    try {
      return await instance.post<IAuthResponse>('/auth/login', body)
    } catch (error: any) {
      throw error
    }
  },

  register: async (body: IRegisterRequest) => {
    try {
      return await instance.post<IAuthResponse>('/auth/registration', body)
    } catch (error: any) {
      throw error
    }
  }
}