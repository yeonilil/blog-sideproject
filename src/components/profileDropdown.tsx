"use client";

import useDetectClose from "@/hooks/useDetectClose";
import { getUserProfile, patchProfile } from "@/pages/api/users";
import { UserProfile } from "@/types/type";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ProfileDropdown = () => {
  const dropDownRef = useRef<HTMLButtonElement | null>(null);
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProfile>({ mode: "onSubmit" });

  const handleDropdownClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const handlePatchProfile = async (form: UserProfile) => {
    try {
      const profileData = await patchProfile(form); // 프로필 수정 요청
      setProfile(profileData); // 수정된 프로필 데이터 반영
      toast.info("프로필 정보가 수정되었습니다."); // 성공 메시지
    } catch (error: any) {
      console.log(error); // 에러 확인
      toast.error("프로필 정보를 수정하는 데 실패했습니다."); // 실패 메시지
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getUserProfile(); // 프로필 조회
        setProfile(profileData);
      } catch (error: any) {
        console.log(error); // 에러 확인
        toast.error("프로필 정보를 가져오는 데 실패했습니다."); // 실패 메시지
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} ref={dropDownRef}>
        <Image
          src="/assets/profile.svg"
          alt="logo"
          width={40}
          height={40}
          className="cursor-pointer mt-[4px]"
        />
        {isOpen && (
          <ul className="absolute w-[250px] h-[300px] top-[65px] right-[50px] text-black-700 gap-[8px] bg-white rounded-[16px] drop-shadow-xl p-4">
            <h1>PROFILE</h1>
            {profile && (
              <li onClick={handleDropdownClick}>
                <form
                  className="flex flex-col items-center text-left"
                  onSubmit={handleSubmit(handlePatchProfile)} // 프로필 수정 핸들러
                >
                  <label className="text-[13px]">Nickname</label>
                  <input
                    {...register("nickname", { required: true })} // 닉네임 필수 입력
                    defaultValue={profile.nickname} // 기존 닉네임 출력
                    className="h-[30px] text-[12px] border-[1px] rounded-[10px] pl-[10px] mt-[5px]"
                  />
                  {errors.nickname && (
                    <p className="text-red-500 text-[12px]">
                      닉네임을 입력해주세요.
                    </p>
                  )}
                  <button type="submit">
                    <Image
                      src="/assets/ic-edit.svg"
                      alt="편집 아이콘"
                      width={20}
                      height={20}
                      className="cursor-pointer ml-[4px]"
                    />
                  </button>

                  <label className="w-full mt-[10px] text-[13px]">Bio</label>
                  <input
                    {...register("bio")}
                    defaultValue={profile.bio} // 기존 bio 출력
                    className="w-full h-[100px] text-[12px] border-[1px] rounded-[10px] pl-[10px] mt-[5px]"
                  />

                  <button
                    type="submit"
                    className="w-[100px] bg-blue-400 px-[12px] py-[5px] mt-[20px] rounded-[100px] text-white text-[12px] font-semibold hover:text-blue-800"
                  >
                    수정 완료
                  </button>
                </form>
              </li>
            )}
          </ul>
        )}
      </button>
    </div>
  );
};

export default ProfileDropdown;
