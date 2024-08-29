// Register User Request Body Type
export interface RegisterUserRequest {
  username: string;
  password: string;
  nickname: string;
  bio: string;
}

// Register User Response Type
export interface RegisterUserResponse {
  username: string;
  password: string;
  nickname: string;
  bio: string;
  _id: string;
  __v: number;
}

// Login User Request Body Type
export interface LoginUserRequest {
  username: string;
  password: string;
}

// Login User Response Type
export interface LoginUserResponse {
  access_token: string;
}

export interface LoginFormProps {
  username: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
  bio: string;
}

export interface UserProfile {
  username: string;
  email: string;
}

export interface UserProfile {
  username: string;
  email: string;
}

//포스트 타입
export interface PostFormProps {
  title: string;
  content: string;
  categories: string[];
}
