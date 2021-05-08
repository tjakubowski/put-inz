import { createSlice } from '@reduxjs/toolkit';
import { loadToken, login } from './actions';
import { UserRole } from '../../utils/auth';

interface AuthState {
  token: string | null;
  refreshToken: string | null;
  role: UserRole | null;
  isPending: boolean;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: null,
  refreshToken: null,
  role: null,
  isPending: false,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadToken.fulfilled, (state, action) => {
      state.token = action.payload.token;
    });
    builder.addCase(login.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.isPending = false;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.role = action.payload.role as UserRole;
    });
    builder.addCase(login.rejected, (state) => {
      state.isPending = false;
    });
  },
});

export default authSlice.reducer;
