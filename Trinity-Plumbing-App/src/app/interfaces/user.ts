export interface User {
  email: string;
  password: string;
}
export interface UserResponse {
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: {
      _id: string;
      name: string;
    };
  };
  accessToken: string;
}
