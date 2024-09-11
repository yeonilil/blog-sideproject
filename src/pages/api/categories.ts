import { Category } from "@/types/type";
import { getRequest } from "./axios";

export const getCategories = async (): Promise<Category[]> => {
  return getRequest<Category[]>(`/categories`); // getRequest 함수가 카테고리 배열을 반환
};

export const categoriesSearch = async (query: string): Promise<Category[]> => {
  // 쿼리 파라미터를 URL에 포함
  return getRequest<Category[]>(
    `/categories/search?query=${encodeURIComponent(query)}`
  );
};
