"use client";

import { useState, useEffect } from "react";
import { BiSolidSearchAlt2 } from "react-icons/bi";
import QuickInfoBoard from "@/components/QuickInfoBoard";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebase/config";
import Image from "next/image";
import Calendar from "@/components/Calendar";
import Revenue from "@/components/Revenue";
import DatabaseTabs from "@/components/DatabaseTabs";
import Events from "@/components/Events";
import Announcement from "@/components/Announcement";

/**
 * Dashboard Component
 * 
 * Manages user authentication state, displays various dashboard elements, 
 * and ensures the user is authenticated before allowing access to the dashboard features.
 */
const Dashboard = () => {
  // State variables
  const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const router = useRouter();

  /**
   * useEffect hook to check the authentication state of the user.
   * If the user is authenticated, their information is stored in session storage.
   * If not, the user is redirected to the login page.
   */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (authUser) => {
      if (authUser) {
        setUser(authUser);
        // Serialize user object to JSON string before storing
        const userInfoString = JSON.stringify(authUser);
        sessionStorage.setItem('userInfo', userInfoString);
      } else {
        router.push('/auth/login');
      }
    });
    // setLoading(false);
    return () => unsubscribe();
  }, [router]);


  // Render the dashboard for authenticated users
  if (user) {
    return (
      <>
        <div className="px-[25px] sm:p-[30px] w-full flex-1 h-screen overflow-y-auto pt-[70px] lg:pt-8 relative">
          <h1 className="lg:hidden inline-block text-[20px] font-bold text-gray-500 py-5 sm:my-10">Dashboard</h1>
          
          {/* Search bar and user info */}
          <div className="hidden lg:flex lg:flex-row flex-col items-center justify-between lg:mb-10">
            <div className="relative shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg flex-[0.7]">
              <input className="rounded-md border px-4 py-2 pl-10 text-indigo-600  focus:outline-none focus:border-indigo-500 w-full" placeholder="Search" />
              <BiSolidSearchAlt2 className="absolute left-[10px] top-[50%] -translate-y-[50%] text-indigo-600 text-[18px]" />
            </div>
            <div className="lg:flex items-center justify-between gap-5 hidden">
              <p className="text-indigo-600 text-[14px] font-medium">{user && user.email}</p>
              <div className="bg-white w-[50px] h-[50px] rounded-full overflow-hidden">
                <Image className="object-cover object-center bg-red-400" src="/profilePic2.jpg" width={1000} height={1000} alt="Profile Picture" />
              </div>
            </div>
          </div>

          {/* Quick info board */}
          <div className="m-0 lg:mt-[30px] mb-[25px]">
            <QuickInfoBoard />
          </div>

          {/* Revenue and upcoming events */}
          <div className="flex-col h-[330px] flex xl:flex-row mb-32 xl:my-0 justify-between items-start gap-5 rounded-xl">
            <div className="w-full md:flex-[0.7] h-fit shadow-[rgba(17,_17,_26,_0.15)_0px_0px_8px] rounded-xl p-7">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-indigo-500 font-semibold">Revenue</p>
                <Calendar onYearChange={setSelectedYear} />
              </div>
              <Revenue year={selectedYear} />
            </div>
            <div className="w-full md:flex-[0.3] h-fit shadow-[rgba(17,_17,_26,_0.15)_0px_0px_8px] rounded-xl p-7">
              <p className="text-indigo-500 font-semibold mb-6">Upcoming Events</p>
              <Events />
            </div>
          </div>

          {/* Database and announcements */}
          <div className="flex-col min-h-[330px]  flex xl:flex-row justify-between items-start gap-5 xl:my-7 rounded-xl">
            <div className="w-full  md:flex-[0.7] h-full shadow-[rgba(17,_17,_26,_0.15)_0px_0px_8px] rounded-xl p-7 pb-0">
              <div className="mb-6">
                <p className="text-indigo-500 font-semibold">Database</p>
              </div>
              <div className="overflow-scroll">
                <DatabaseTabs />
              </div>
            </div>
            <div className="w-full md:flex-[0.3] bg-white h-fit shadow-[rgba(17,_17,_26,_0.15)_0px_0px_8px] rounded-xl p-7">
              <p className="text-indigo-500 font-semibold mb-6">Announcements</p>
              <Announcement />
            </div>
          </div>
        </div>
      </>
    );
  }

  // Render nothing if the user is not authenticated (handled by redirect)
  return null;
};

export default Dashboard;
