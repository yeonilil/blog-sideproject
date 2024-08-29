import { useEffect, useState } from "react";
import { getUserProfile } from "./api/users";
import { UserProfile } from "@/types/type";
import Header from "@/components/header";
import Wrapper from "@/components/animation";

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
        <Header />
        <div className="h-full bg-custom-gradient flex flex-col items-center pt-[100px]">
          <div className="h-screen bg-custom-gradient">
            {profile && (
              <div className="profile">
                <h2>PROFILE</h2>
                <p>닉네임: {profile.username}</p>
                <p>소개: {profile.email}</p>
                {/* 필요한 다른 프로필 정보들 추가 */}
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </>
  );
}
