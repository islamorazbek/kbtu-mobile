import { createAsyncThunk } from "@reduxjs/toolkit";
import { authAPI } from "../../../api/auth";
import { ILoginRequest, IRegisterRequest } from "../../../types/IAuth";
import * as SecureStore from 'expo-secure-store';

export const logInThunk = createAsyncThunk(
  "auth/login",
  async (body: ILoginRequest, thunkAPI) => {
    try {
      console.log("ACTION/login");
      const response = await authAPI.login(body);
      console.info(response.data)
      const { access_token, profile } = response.data;
      await SecureStore.setItemAsync('access_token', access_token)
      return { access_token, profile };
    } catch (error: any) {
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (body: IRegisterRequest, thunkAPI) => {
    try {
      console.log("ACTION/register");
      const response = await authAPI.register(body);
      console.info(response.data)
      const { access_token, profile } = response.data;
      await SecureStore.setItemAsync('access_token', access_token)
      return { access_token, profile };
    } catch (error: any) {
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await SecureStore.deleteItemAsync("access_token");
      return;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.data.status);
    }
  }
);