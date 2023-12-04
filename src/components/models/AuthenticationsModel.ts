export type ModeProps = string;
export type AccessProps = boolean;

export type AuthProps = {
  isLoggedIn: AccessProps;
  isMode: ModeProps;
};

export type UsernameProps = string;
export type PasswordProps = string;
export type CodeProps = string;

export type CheckAuthProps = {
  checkAuth: (auth: AuthProps) => void;
};

export type CheckModeProps = string;