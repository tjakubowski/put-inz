export enum UserRole {
  Guest = 'GUEST',
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
  access: string;
  expire: number;
  role: UserRole;
}

export interface RegisterResponse extends JwtResponse {}

export interface LoginResponse extends JwtResponse {}

export interface RefreshTokenResponse extends JwtResponse {}
