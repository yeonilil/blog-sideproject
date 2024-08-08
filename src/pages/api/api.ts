
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API;
import { RegisterUserRequest,RegisterUserResponse,LoginUserRequest,LoginUserResponse } from '@/types/type';


export const registerUser = async (userData: RegisterUserRequest): Promise<RegisterUserResponse> => {
    try {
      const response = await axios.post<RegisterUserResponse>(`${API_URL}/auth/register`, userData, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
        },
      });
      return response.data;
    } catch (error) {
      console.error('회원가입에 실패했습니다');
      throw error;
    }
  };
  
  export const loginUser = async (loginUserData: LoginUserRequest): Promise<LoginUserResponse> => {
    try {
      const response = await axios.post<LoginUserResponse>(`${API_URL}/auth/login`, loginUserData, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
        },
      });
      return response.data;
    } catch (error) {
      console.error('로그인에 실패했습니다');
      throw error;
    }
  };