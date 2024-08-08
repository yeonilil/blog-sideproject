"use client";

import useDetectClose from "@/hooks/useDetectClose";
import { getUserProfile } from "@/pages/api/api";
import { UserProfile } from "@/types/type";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ProfileDropdown = () => {
  const dropDownRef = useRef<HTMLButtonElement | null>(null);
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);

  //TODO: 상태 관리
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState<string>("프로필");

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

  //FIX: 선택하는 부분 필요 X, 열고 닫기만
  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        ref={dropDownRef}
      >
        <Image
          src="../assets/profile.svg"
          alt="logo"
          width={45}
          height={40}
          className="cursor-pointer"
        />
        {isOpen && (
          <ul className="absolute top-[40px] right-[20px] xl:top-[45px] mt-[4px] flex flex-col justify-center items-start w-[200px] h-auto gap-[8px]  bg-white rounded-[16px] xl:gap-[12px] drop-shadow-xl xl:mt-[15px] p-4">
            {loading && <li>로딩 중...</li>}
            {error && <li>{error}</li>}
            {profile && (
              <li onClick={() => handleSelect("프로필")}>
                <div className="profile">
                  <h2>Profile</h2>
                  <p>{profile.username}</p>
                </div>
              </li>
            )}
          </ul>
        )}
      </button>
    </div>
  );
};

export default ProfileDropdown;
