import { RootState } from "../store";

export const selectorUser = (state: RootState) => state.authSlice.user;