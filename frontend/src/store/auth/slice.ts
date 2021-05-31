import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshToken } from './actions';
import { isFulfilledAction, isPendingAction, isRejectedAction } from 'utils/actions';
import { UserRole } from 'types/auth';

export interface AuthState {
  isAuthenticated: boolean;
  isPending: boolean;
  role: UserRole;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isPending: false,
  role: UserRole.Guest,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.role = action.payload.role;
    });
    builder.addCase(refreshToken.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.role = action.payload.role;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isAuthenticated = false;
      state.role = UserRole.Guest;
    });
    builder.addMatcher(isPendingAction, (state) => {
      state.isPending = true;
    });
    builder.addMatcher(isRejectedAction, (state) => {
      state.isPending = false;
    });
    builder.addMatcher(isFulfilledAction, (state) => {
      state.isPending = false;
    });
  },
});

export default authSlice.reducer;
