import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API;
axios.defaults.withCredentials = true; // 모든 요청에 대해 쿠키 및 인증 정보 포함

// Reusable GET request function
export const getRequest = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  try {
    const token = localStorage.getItem('access_token');
    if (!token) {
      throw new Error('액세스 토큰이 없습니다. 로그인이 필요합니다.');
    }

    const response: AxiosResponse<T> = await axios.get(`${API_URL}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Authorization': `Bearer ${token}`,
      },
      ...config,
    });
    
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`GET 요청 실패: ${url}`, error.message);
      console.error('응답 데이터:', error.response?.data);
    } else {
      console.error('기타 오류:', error);
    }
    throw error;
  }
};

// Reusable POST request function
export const postRequest = async <T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> => {
  try {
    const token = localStorage.getItem('access_token');
    if (!token) {
      throw new Error('액세스 토큰이 없습니다. 로그인이 필요합니다.');
    }

    const response: AxiosResponse<T> = await axios.post(`${API_URL}${url}`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Authorization': `Bearer ${token}`,
      },
      ...config,
    });
    
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`POST 요청 실패: ${url}`, error.message);
      console.error('응답 데이터:', error.response?.data);
    } else {
      console.error('기타 오류:', error);
    }
    throw error;
  }
};

// Reusable PATCH request function
export const patchRequest = async <T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> => {
  try {
    const token = localStorage.getItem('access_token');
    if (!token) {
      throw new Error('액세스 토큰이 없습니다. 로그인이 필요합니다.');
    }

    const response: AxiosResponse<T> = await axios.patch(`${API_URL}${url}`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Authorization': `Bearer ${token}`,
      },
      ...config,
    });
    
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`PATCH 요청 실패: ${url}`, error.message);
      console.error('응답 데이터:', error.response?.data);
    } else {
      console.error('기타 오류:', error);
    }
    throw error;
  }
};

// Reusable DELETE request function
export const deleteRequest = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  try {
    const token = localStorage.getItem('access_token');
    if (!token) {
      throw new Error('액세스 토큰이 없습니다. 로그인이 필요합니다.');
    }

    const response: AxiosResponse<T> = await axios.delete(`${API_URL}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Authorization': `Bearer ${token}`,
      },
      ...config,
    });
    
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`DELETE 요청 실패: ${url}`, error.message);
      console.error('응답 데이터:', error.response?.data);
    } else {
      console.error('기타 오류:', error);
    }
    throw error;
  }
};
