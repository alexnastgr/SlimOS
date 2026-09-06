export type UserType = "admin" | "user";

export type IUser = {
  uid: number;
  name: string;
  username: string;
  password: string;
  avatar: string;
  userType: UserType;
};

export type Action = "logout" | "lock" | "reboot" | null;
