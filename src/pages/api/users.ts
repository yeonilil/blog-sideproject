import { UserProfile } from "@/types/type";
import { getRequest } from "./axios";

// getUserProfile function using the reusable getRequest
export const getUserProfile = async (): Promise<UserProfile> => {
    return getRequest<UserProfile>('/users/profile');
  };