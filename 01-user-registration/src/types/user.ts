// 01-user-registration/src/types/user.ts
export interface UserData {
  username: string;
  email: string;
  age: number;
  city: string;
}

export interface UserContextType {
  userData: UserData | null;
  setUserData: (data: UserData) => void;
}
