import { getRequest } from "./axios";

export const getComments = async (postId: string): Promise<void> => {
  return getRequest<void>(`/comments/${postId}`);
};
