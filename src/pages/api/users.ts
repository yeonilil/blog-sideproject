import { UserProfile } from "@/types/type";
import { getRequest } from "./axios";

export const getUserProfile = async (): Promise<UserProfile> => {
    return getRequest<UserProfile>('/users/profile');
  };