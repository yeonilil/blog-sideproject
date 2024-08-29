import { Post, PostFormProps } from "@/types/type";
import { getRequest, postRequest } from "./axios";

export const writePost = async (
  postData: PostFormProps
): Promise<PostFormProps> => {
  return postRequest<PostFormProps>("/posts", postData);
};

// 모든 게시물
export const getAllPosts = async (): Promise<Post[]> => {
  return getRequest<Post[]>("/posts");
};

// ID -> 게시물
export const getPostById = async (id: string): Promise<Post> => {
  return getRequest<Post>(`/posts/${id}`);
};
