import API from '../plugins/axios';
import {
  LoginData,
  LoginResponse,
  RefreshTokenData,
  RefreshTokenResponse,
  RegisterData,
  RegisterResponse,
} from '../utils/auth';

export const login = async (payload: LoginData): Promise<RegisterResponse> => {
  const { data } = await API.post('/auth/login', payload);
  const { access: token, refresh: refreshToken, role } = data;

  return { token, refreshToken, role };
};

export const register = async (payload: RegisterData): Promise<LoginResponse> => {
  const { data } = await API.post('/auth/patient_registration', payload);
  const { access: token, refresh: refreshToken, role } = data;

  return { token, refreshToken, role };
};

export const refreshToken = async (payload: RefreshTokenData): Promise<RefreshTokenResponse> => {
  const { data } = await API.post('/auth/refresh-token', payload);
  const { token } = data;

  return { token };
};
