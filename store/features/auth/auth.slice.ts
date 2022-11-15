import { createSlice } from "@reduxjs/toolkit";
import { authState } from "./auth.state";
import { logInThunk, logOutThunk, registerThunk } from "./auth.thunk";

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    resetAuthError: (state) => {
      state.error = ""
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logInThunk.pending, (state) => {
      state.isAuthLoading = true;
    });
    builder.addCase(logInThunk.rejected, (state, action) => {
      state.isAuthLoading = false;
      state.error = action.payload as string;
    });
    builder.addCase(logInThunk.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.profile = action.payload.profile;
      state.isAuthLoading = false;
    });

    builder.addCase(registerThunk.pending, (state) => {
      state.isAuthLoading = true;
    });
    builder.addCase(registerThunk.rejected, (state, action) => {
      state.isAuthLoading = false;
      state.error = action.payload as string;
    });
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.profile = action.payload.profile;
      state.isAuthLoading = false;
    });

    builder.addCase(logOutThunk.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.profile = null;
    });
  },
})

export const authReducer = authSlice.reducer;

export const { resetAuthError } = authSlice.actions;
