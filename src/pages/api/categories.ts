import { Category } from "@/types/type";
import { getRequest } from "./axios";

export const getCategories = async (): Promise<Category[]> => {
  return getRequest<Category[]>(`/categories`); // getRequest 함수가 카테고리 배열을 반환
};
