import http from '../http';
import {
  LoginPayload,
  LoginResponse,
  RefreshTokenResponse,
  RegisterPayload,
  RegisterResponse,
} from '../../types/auth';

export const register = async (payload: RegisterPayload): Promise<RegisterResponse> => {
  const { data } = await http.post(`/auth/login`, { ...payload });
  return data;
};

export const login = async (credentials: LoginPayload): Promise<LoginResponse> => {
  const { data } = await http.post(`/auth/login`, { ...credentials });
  return data;
};

export const logout = async (): Promise<boolean> => {
  await http.post('/auth/logout');
  return true;
};

export const refreshToken = async (): Promise<RefreshTokenResponse> => {
  const { data } = await http.post('/auth/refresh');
  return data;
};
