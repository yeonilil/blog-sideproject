import { getCategories } from "@/pages/api/categories";
import { Category } from "@/types/type";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SearchCategory from "./searchCategory";

export default function CategoryContainer() {
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
    <div className="flex flex-col w-[400px] md:w-[600px] xl:w-[700px] mt-[20px] ">
      {/* <SearchCategory /> */}
      <p className="font-semibold text-[14px] text-gray-400 mb-[10px] ">
        Category
      </p>
      <div className="flex gap-[4px] mb-[10px]">
        {categories.map((category: Category, index: number) => (
          <p
            key={index}
            className="w-fit text-[13px] text-gray-400 inline-block transform rounded-[8px] bg-blue-200 px-[8px] py-[4px] transition hover:scale-105"
          >
            {category.name}
          </p>
        ))}
      </div>
    </div>
  );
}
