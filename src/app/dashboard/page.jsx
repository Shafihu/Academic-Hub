"use client";

import { useState, useEffect } from "react";
import { BiSolidSearchAlt2 } from "react-icons/bi";
import QuickInfoBoard from "@/components/QuickInfoBoard";
import BarChart from "@/components/BarChart";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebase/config";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (authUser) => {
      if (authUser) {
        setUser(authUser);
        // Serialize user object to JSON string before storing
        const userInfoString = JSON.stringify(authUser);
        sessionStorage.setItem('userInfo', userInfoString);
      }else {
        router.push('/login'); 
      }
    })
    setLoading(false);
    return () => unsubscribe();
}, [])


  if(loading) {
    return <div className="flex-1 w-full h-screen"><Loader /></div>; 
  } 

  if (user) {

  return (
        <>
          <div className="px-[25px] sm:p-[30px] w-full flex-1 h-screen overflow-y-auto ">
            <div className="flex sm:flex-row flex-col items-center justify-between">
            <div className="relative shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg">
                <input
                  className="rounded-lg px-4 py-2 pl-10 text-indigo-600 "
                  placeholder="Search"
                />
                <BiSolidSearchAlt2 className="absolute left-[10px] top-[50%] -translate-y-[50%] text-indigo-600 text-[18px]" />
              </div>

              <div className="flex items-center justify-between gap-5">
                <p className="text-indigo-600 text-[14px] font-medium">
                  {user && user.email}
                </p>
                <div className="bg-pink-300 w-[50px] h-[50px] rounded-full"></div>
              </div>
            </div>
            <div className="mt-[30px] mb-[25px] ">
              <QuickInfoBoard />
            </div>

            <div className="flex-col h-[330px] flex xl:flex-row mb-32 xl:my-0 justify-between items-center gap-5">
              <div className="w-full md:flex-[0.7] h-fit shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-xl p-7">
                <div className="mb-6">
                  <p className="text-indigo-500 font-semibold">Revenue</p>
                </div>
                <BarChart />
              </div>
            <div className="w-full md:flex-[0.3] h-full  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-xl p-7">
                <p className="text-indigo-500 font-semibold">Upcoming Events</p>
              </div>
            </div>

            <div className="flex-col h-[330px] flex xl:flex-row justify-between items-center gap-5 xl:my-7">
              <div className="w-full md:flex-[0.7] h-fit shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-xl p-7">
                <div className="mb-6">
                  <p className="text-indigo-500 font-semibold">Database</p>
                </div>
                <BarChart />
              </div>
            <div className="w-full md:flex-[0.3] h-full  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-xl p-7">
                <p className="text-indigo-500 font-semibold">Announcements</p>
              </div>
            </div>
          </div>
        </>
  );

}

};
export default Dashboard;
