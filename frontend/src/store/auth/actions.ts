import { AuthService } from '../../services/';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getJwtToken,
  LoginData,
  RefreshTokenData,
  RegisterData,
  setJwtToken,
} from '../../utils/auth';

export const login = createAsyncThunk(
  'auth/login',
  async (loginData: LoginData, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(loginData);
      const { token } = response;
      setJwtToken(token);
      return response;
    } catch (e) {
      return rejectWithValue('');
    }
  },
);

export const register = createAsyncThunk(
  'auth/register',
  async (registerData: RegisterData) => {
    const { token } = await AuthService.register(registerData);
    setJwtToken(token);

    return token;
  },
);

export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (refreshTokenData: RefreshTokenData) => {
    const { token } = await AuthService.refreshToken(refreshTokenData);
    setJwtToken(token);

    return token;
  },
);

export const loadToken = createAsyncThunk(
  'auth/loadToken',
  async () => {
    const token = getJwtToken();
    console.log(token);

    return { token };
  },
);
