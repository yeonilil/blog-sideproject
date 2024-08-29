import axios from 'axios';
import { RegisterUserRequest, RegisterUserResponse, LoginUserRequest, LoginUserResponse, UserProfile } from '@/types/type';

const API_URL = process.env.NEXT_PUBLIC_API;
axios.defaults.withCredentials = true; // 모든 요청에 대해 쿠키 및 인증 정보 포함

export const registerUser = async (userData: RegisterUserRequest): Promise<RegisterUserResponse> => {
  try {
    const response = await axios.post<RegisterUserResponse>(`${API_URL}/auth/register`, userData, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
      },
      withCredentials: true, 
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
      withCredentials: true, 
    });

    // 응답 상태 코드가 201이거나 200일 때 처리
    if (response.status === 201 || response.status === 200) {
      const { access_token } = response.data;
      localStorage.setItem('access_token', access_token);
      return response.data;
    } else {
      // 다른 상태 코드 처리
      console.error('Unexpected response status:', response.status);
      throw new Error('로그인에 실패했습니다.');
    }
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