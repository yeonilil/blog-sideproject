import axios from 'axios';
import { RegisterUserRequest, RegisterUserResponse, LoginUserRequest, LoginUserResponse, UserProfile } from '@/types/type';

const API_URL = process.env.NEXT_PUBLIC_API;
axios.defaults.withCredentials = true;

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
    const { access_token } = response.data;
    localStorage.setItem('access_token', access_token);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('네트워크 오류:', error.message);
      console.error('응답 데이터:', error.response?.data);
      throw new Error('로그인에 실패했습니다. 네트워크 오류가 발생했습니다.');
    } else {
      console.error('기타 오류:', error);
      throw new Error('로그인에 실패했습니다. 알 수 없는 오류가 발생했습니다.');
    }
  }
};

export const getUserProfile = async (): Promise<UserProfile> => {
  try {
    const token = localStorage.getItem('access_token');
    if (!token) {
      throw new Error('액세스 토큰이 없습니다. 로그인이 필요합니다.');
    }
    const response = await axios.get(`${API_URL}/users/profile`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('프로필 정보를 가져오는데 실패했습니다:', error.message);
      console.error('응답 데이터:', error.response?.data);
    } else {
      console.error('기타 오류:', error);
    }
    throw error;
  }
};
