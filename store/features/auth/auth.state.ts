import { IProfile } from "../../../types/IProfile";

type AuthType = {
  isAuthenticated: boolean;
  profile: IProfile | null;
  isAuthLoading: boolean;
  error: string;
};

export const authState: AuthType = {
  isAuthenticated: false,
  profile: null,
  isAuthLoading: false,
  error: ""
};
