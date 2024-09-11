import { postComments } from "@/pages/api/comments";
import { useState } from "react";
import { toast } from "react-toastify";

export default function CommentContainer({ postId }: { postId: string }) {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!comment.trim()) {
      toast.error("댓글을 입력하세요.");
      return;
    }
    // 댓글이 120자를 초과하는지 확인
    if (comment.length > 120) {
      toast.error("댓글은 120자 이하로 입력해주세요.");
      return;
    }

    try {
      await postComments(postId, comment);
      toast.success("댓글이 성공적으로 작성되었습니다.");
      setComment(""); // 댓글 입력란 초기화
    } catch (error) {
      toast.error("댓글 작성에 실패했습니다.");
      console.error("댓글 작성에 실패했습니다:", error);
    }
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <label className="font-semibold">댓글 작성</label>
        <div className="flex items-center">
          <input
            type="text"
            value={comment}
            maxLength={120}
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 입력하세요"
            className="w-full p-5 rounded-md h-[50px] mr-[10px]"
          />
          <button
            type="submit"
            className="w-[100px] h-[50px] bg-black-400 text-white rounded-[10px] "
          >
            제출하기
          </button>
        </div>
      </form>
    </div>
  );
}
