import { getRequest, postRequest } from "./axios";

export const getComments = async (postId: string): Promise<void> => {
  return getRequest<void>(`/comments/${postId}`);
};

export const postComments = async (
  postId: string,
  data: string
): Promise<void> => {
  return postRequest<void>(`/comments/${postId}`, {
    comment: data,
  });
};
