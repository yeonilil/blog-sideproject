import { useEffect, useState } from "react";
import { getUserProfile } from "./api/users";
import { UserProfile } from "@/types/type";
import Header from "@/components/header";
import Wrapper from "@/components/animation";
import Banner from "@/components/banner";
import PostCardContainer from "@/components/postCardContainer";

export default function Mypage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getUserProfile();
        setProfile(profileData);
        setLoading(false);
      } catch (error: any) {
        setError("프로필 정보를 가져오는데 실패했습니다.");
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;
  return (
    <>
      <Wrapper>
        <div className="h-full">
          <div className="h-full flex flex-col items-center font-Pretendard h-full bg-bg-100">
            <Header />
            <Banner />
            <PostCardContainer />
          </div>
        </div>
      </Wrapper>
    </>
  );
}
