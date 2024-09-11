import { UserProfile } from "@/types/type";
import { getRequest, patchRequest } from "./axios";

//프로필 조회
export const getUserProfile = async (): Promise<UserProfile> => {
  return getRequest<UserProfile>("/users/profile");
};

//프로필 수정
export const patchProfile = async (
  updateData: UserProfile
): Promise<UserProfile> => {
  return patchRequest<UserProfile>(`/users/profile`, updateData);
};
