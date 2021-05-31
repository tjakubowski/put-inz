import * as authService from 'api/services/auth.service';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeaders } from 'api/http';
import { getExpireTimeWithOffset } from 'utils/auth';
import { AppDispatch, RootState } from 'store';
import { LoginPayload } from 'types/auth';

const delayRefresh = (expiresIn: number, dispatch: AppDispatch, getState: () => RootState) => {
  setTimeout(() => {
    const { auth } = getState();

    if (auth.isAuthenticated) {
      dispatch(refreshToken());
    }
  }, getExpireTimeWithOffset(expiresIn));
};

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: LoginPayload, { dispatch, getState }) => {
    const result = await authService.login(credentials);
    const { accessToken, expiresIn } = result;

    setAuthHeaders(accessToken);
    delayRefresh(expiresIn, dispatch, getState as () => RootState);

    return result;
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  const result = await authService.logout();
  setAuthHeaders('');

  return result;
});

export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (data, { dispatch, getState }) => {
    const result = await authService.refreshToken();
    const { accessToken, expiresIn } = result;

    setAuthHeaders(accessToken);
    delayRefresh(expiresIn, dispatch, getState as () => RootState);

    return result;
  },
);
