"use client";

import React, { useState, useEffect } from "react";
import { MdSpaceDashboard, MdSettings } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentFill, PiExamFill } from "react-icons/pi";
import { FaWallet } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { RiLogoutBoxFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { FIREBASE_AUTH } from "@/app/firebase/config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";


const SideBar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (authUser) => {
      if (authUser) {
        setUser(authUser);
      }else {
        setUser(null)
      }
    })
    return () => unsubscribe();
}, [])

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };


  if(!user) {
    return ;
  }

  if (user) {

  return(

    <div className="hidden lg:flex flex-col bg-indigo-600 rounded-tr-3xl   md:py-5 h-screen overflow-y-auto justify-between " >
      <div className="flex items-center justify-center mb-0 px-8">
        <div className="flex flex-col items-center text-white text-center gap-3 ">
          <h1 className="font-medium text-[24px]">Academic Hub</h1>
    <div className="bg-white rounded-full">
    <Image
            className="object-cover object-center"
            src="/logo.png"
            width={70}
            height={70}
            alt="Logo"
          />
    </div>
          <p className="font-bold text-[17px]">School Management System</p>
        </div>
      </div>

      <div className="pl-8 flex flex-col ">
        <Link
          href="/dashboard"
          className="relative flex justify-start items-center gap-4 text-white text-medium text-[14px] py-3 hover:bg-[rgba(255,255,255,0.1)] group"
          onClick={() => handleLinkClick(0)}
        >
          <MdSpaceDashboard className="text-[18px] group-hover:scale-125 transition-transform transform" />
          <p>Dashboard</p>
          {activeLink === 0 && (
            <>
              <span
                className={`absolute top-0 right-0 w-[100%] h-[100%]  ${
                  activeLink === 0
                    ? "bg-gradient-to-r from-transparent to-white opacity-20"
                    : ""
                }`}
              ></span>
              <span className="absolute top-0 right-0 w-1 h-[100%] bg-white"></span>
            </>
          )}
        </Link>

        <Link
          href='/dashboard/teachers'
          className="relative flex justify-start items-center gap-4 text-white text-medium text-[14px] py-3 hover:bg-[rgba(255,255,255,0.1)] group"
          onClick={() => handleLinkClick(1)}
        >
          <FaChalkboardTeacher className="text-[18px] group-hover:scale-125 transition-transform transform" />
          <p>Teachers</p>
          {activeLink === 1 && (
            <>
              <span
                className={`absolute top-0 right-0 w-[100%] h-[100%]  ${
                  activeLink === 1
                    ? "bg-gradient-to-r from-transparent to-white opacity-20"
                    : ""
                }`}
              ></span>
              <span className="absolute top-0 right-0 w-1 h-[100%] bg-white"></span>
            </>
          )}
        </Link>

        <Link
          href="/dashboard/students"
          className="relative flex justify-start items-center gap-4 text-white text-medium text-[14px] py-3 hover:bg-[rgba(255,255,255,0.1)] group"
          onClick={() => handleLinkClick(2)}
        >
          <PiStudentFill className="text-[18px] group-hover:scale-125 transition-transform transform" />
          <p>Students / Classes</p>
          {activeLink === 2 && (
            <>
              <span
                className={`absolute top-0 right-0 w-[100%] h-[100%]  ${
                  activeLink === 2
                    ? "bg-gradient-to-r from-transparent to-white opacity-20"
                    : ""
                }`}
              ></span>
              <span className="absolute top-0 right-0 w-1 h-[100%] bg-white"></span>
            </>
          )}
        </Link>

        <Link
          href="/dashboard/billings"
          className="relative flex justify-start items-center gap-4 text-white text-medium text-[14px] py-3 hover:bg-[rgba(255,255,255,0.1)] group"
          onClick={() => handleLinkClick(3)}
        >
          <FaWallet className="text-[18px] group-hover:scale-125 transition-transform transform" />
          <p>Billings</p>
          {activeLink === 3 && (
            <>
              <span
                className={`absolute top-0 right-0 w-[100%] h-[100%]  ${
                  activeLink === 3
                    ? "bg-gradient-to-r from-transparent to-white opacity-20"
                    : ""
                }`}
              ></span>
              <span className="absolute top-0 right-0 w-1 h-[100%] bg-white"></span>
            </>
          )}
        </Link>

        <Link
          href="/dashboard/exams"
          className="relative flex justify-start items-center gap-4 text-white text-medium text-[14px] py-3 hover:bg-[rgba(255,255,255,0.1)] group"
          onClick={() => handleLinkClick(4)}
        >
          <PiExamFill className="text-[18px] group-hover:scale-125 transition-transform transform" />
          <p>Exams</p>
          {activeLink === 4 && (
            <>
              <span
                className={`absolute top-0 right-0 w-[100%] h-[100%]  ${
                  activeLink === 4
                    ? "bg-gradient-to-r from-transparent to-white opacity-20"
                    : ""
                }`}
              ></span>
              <span className="absolute top-0 right-0 w-1 h-[100%] bg-white"></span>
            </>
          )}
        </Link>

        <Link
          href="/dashboard/admission-form"
          className="relative flex justify-start items-center gap-4 text-white text-medium text-[14px] py-3 hover:bg-[rgba(255,255,255,0.1)] group"
          onClick={() => handleLinkClick(5)}
        >
          <SiGoogledocs className="text-[18px] group-hover:scale-125 transition-transform transform" />
          <p>Admission Form</p>
          {activeLink === 5 && (
            <>
              <span
                className={`absolute top-0 right-0 w-[100%] h-[100%]  ${
                  activeLink === 5
                    ? "bg-gradient-to-r from-transparent to-white opacity-20"
                    : ""
                }`}
              ></span>
              <span className="absolute top-0 right-0 w-1 h-[100%] bg-white"></span>
            </>
          )}
        </Link>

        <Link
          href="/dashboard/admission-form-list"
          className="relative flex justify-start items-center gap-4 text-white text-medium text-[14px] py-3 hover:bg-[rgba(255,255,255,0.1)] group"
          onClick={() => handleLinkClick(6)}
        >
          <SiGoogledocs className="text-[18px] group-hover:scale-125 transition-transform transform" />
          <p>Admission Form List</p>
          {activeLink === 6 && (
            <>
              <span
                className={`absolute top-0 right-0 w-[100%] h-[100%]  ${
                  activeLink === 6
                    ? "bg-gradient-to-r from-transparent to-white opacity-20"
                    : ""
                }`}
              ></span>
              <span className="absolute top-0 right-0 w-1 h-[100%] bg-white"></span>
            </>
          )}
        </Link>

        <Link
          href="/dashboard/events"
          className="relative flex justify-start items-center gap-4 text-white text-medium text-[14px] py-3 hover:bg-[rgba(255,255,255,0.1)] group"
          onClick={() => handleLinkClick(7)}
        >
          <BsFillCalendarEventFill className="text-[18px] group-hover:scale-125 transition-transform transform" />
          <p>Events</p>
          {activeLink === 7 && (
            <>
              <span
                className={`absolute top-0 right-0 w-[100%] h-[100%]  ${
                  activeLink === 7
                    ? "bg-gradient-to-r from-transparent to-white opacity-20"
                    : ""
                }`}
              ></span>
              <span className="absolute top-0 right-0 w-1 h-[100%] bg-white"></span>
            </>
          )}
        </Link>

        <Link
          href="/dashboard/settings&profile"
          className="relative flex justify-start items-center gap-4 text-white text-medium text-[14px] py-3 hover:bg-[rgba(255,255,255,0.1)] group"
          onClick={() => handleLinkClick(8)}
        >
          <MdSettings className="text-[20px] group-hover:scale-125 transition-transform transform" />
          <p>Settings & Profile</p>
          {activeLink === 8 && (
            <>
              <span
                className={`absolute top-0 right-0 w-[100%] h-[100%]  ${
                  activeLink === 8
                    ? "bg-gradient-to-r from-transparent to-white opacity-20"
                    : ""
                }`}
              ></span>
              <span className="absolute top-0 right-0 w-1 h-[100%] bg-white"></span>
            </>
          )}
        </Link>
      </div>
<div className=" text-white text-[14px] gap-4 w-fit pl-8 ">
<button 
className="flex items-center gap-4"
type="button" onClick={() =>{
           sessionStorage.clear();
           signOut(FIREBASE_AUTH);
           router.push('/auth/login')
           }}>
            <RiLogoutBoxFill className="text-[20px] group-hover:scale-125 transition-transform transform" />
            Logout
          </button>
</div>
    </div>
  )

}

};

export default SideBar;
