import { useState, useEffect } from "react";

export function useFormattedDate(dateString: string): string {
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    if (dateString) {
      const date = new Date(dateString);

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더해줍니다.
      const day = String(date.getDate()).padStart(2, "0");

      setFormattedDate(`${year}.${month}.${day}`);
    }
  }, [dateString]);

  return formattedDate;
}
