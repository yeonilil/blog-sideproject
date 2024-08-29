import { PostFormProps } from "@/types/type";
import { postRequest } from "./axios";

export const writePost = async (postData: PostFormProps): Promise<PostFormProps> => {
    return postRequest<PostFormProps>('/posts', postData);
};