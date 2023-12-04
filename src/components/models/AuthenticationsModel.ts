export type ModeProps = string;
export type AccessProps = boolean;

export type AuthProps = {
  isLoggedIn: AccessProps;
  isMode: ModeProps;
};

export type UsernameProps = string | null;
export type PasswordProps = string | null;
export type CodeProps = string;

export type CheckAuthProps = () => void;
export type CheckModeProps = string;
