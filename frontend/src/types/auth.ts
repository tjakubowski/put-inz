export enum UserRole {
  Patient = 'PATIENT',
  Doctor = 'DOCTOR',
  Receptionist = 'RECEPTIONIST',
}

export interface RegisterPayload {
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

interface JwtResponse {
  accessToken: string;
  expiresIn: number;
  role: UserRole;
}

export interface RegisterResponse extends JwtResponse {}

export interface LoginResponse extends JwtResponse {}

export interface RefreshTokenResponse extends JwtResponse {}
