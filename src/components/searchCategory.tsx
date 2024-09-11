import { getCategories } from "@/pages/api/categories";
import { Category } from "@/types/type";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function SearchCategory() {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategory = async () => {
    try {
      const categoryData = await getCategories();
      setCategories(categoryData);
    } catch (error) {
      toast.error("카테고리를 불러오는 데 실패했습니다");
      console.error("카테고리를 불러오는 데 실패했습니다", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <>
      <div className="w-fit text-[13px] text-gray-400 inline-block transform rounded-[8px] bg-blue-200 px-[8px] py-[4px] transition hover:scale-105"></div>
    </>
  );
}
