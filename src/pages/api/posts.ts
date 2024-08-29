import { Post, PostFormProps } from "@/types/type";
import { deleteRequest, getRequest, patchRequest, postRequest } from "./axios";

export const writePost = async (
  postData: PostFormProps
): Promise<PostFormProps> => {
  return postRequest<PostFormProps>("/posts", postData);
};

// 모든 게시물
export const getAllPosts = async (): Promise<Post[]> => {
  return getRequest<Post[]>("/posts");
};

// 게시물 삭제
export const getPostById = async (id: string): Promise<Post> => {
  return getRequest<Post>(`/posts/${id}`);
};

//게시물 수정
export const patchPost = async (
  id: string,
  updateData: PostFormProps
): Promise<PostFormProps> => {
  return patchRequest<PostFormProps>(`/posts/${id}`, updateData);
};

// ID -> 게시물
export const deletePost = async (id: string): Promise<Post> => {
  return deleteRequest<Post>(`/posts/${id}`);
};

// 공감하기
export const likePost = async (id: string): Promise<void> => {
  return postRequest<void>(`/posts/${id}/like`);
};
