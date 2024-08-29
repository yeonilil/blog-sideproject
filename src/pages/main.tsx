import { useEffect, useState } from 'react';
import { getUserProfile } from './api/auth';
import { UserProfile } from '@/types/type';
import Header from '@/components/header';

export default function Main() {

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
              setError('프로필 정보를 가져오는데 실패했습니다.');
              setLoading(false);
          }
      };

      fetchProfile();
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>{error}</div>;
    return <>
    <Header/>
    <div className="flex flex-col items-center w-screen h-screen">
            <h1>메인페이지 피드, 목록</h1>
            {profile && (
                <div className="profile">
                    <h2>프로필 정보</h2>
                    <p>아이디: {profile.username}</p>
                    <p>이메일: {profile.email}</p>
                    {/* 필요한 다른 프로필 정보들 추가 */}
                </div>
            )}
        </div>
    </>
  };
  