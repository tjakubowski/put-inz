export enum UserRole {
  Patient = 'PATIENT',
  Doctor = 'DOCTOR',
  Receptionist = 'RECEPTIONIST',
}

export interface RegisterData {
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RefreshTokenData {
  token: string;
}

export interface RegisterResponse {
  token: string;
  refreshToken: string;
  role: string;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
  role: string;
}

export interface RefreshTokenResponse {
  token: string;
}

export const getJwtToken = (): string | null => {
  return localStorage.getItem('token');
};

export const setJwtToken = (token: string) => {
  return localStorage.setItem('token', token);
};

export const resetJwtToken = () => {
  return localStorage.removeItem('token');
};
