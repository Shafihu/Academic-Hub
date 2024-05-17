import React from "react";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { PiExamFill } from "react-icons/pi";
import { FaMoneyBill } from "react-icons/fa";

const QuickInfoBoard = () => {
  return (
    <div className="flex items-center justify-evenly flex-wrap gap-5">
      <div className="border-2 border-[#2B3674] flex flex-col sm:flex sm:flex-row items-center w-[200px] sm:w-[260px] md:w-[260px] py-4 justify-evenly rounded-xl">
        <div className="text-[#2B3674] text-[60px]">
          <IoIosPeople />
        </div>
        <div className="flex flex-col justify-center items-center ">
          <p className="text-gray-500 text-[16px]">Students</p>
          <p className="text-[#2B3674] font-bold text-[30px]">947</p>
        </div>
      </div>

      <div className="border-2 border-[#FB7D5B] flex flex-col sm:flex sm:flex-row  items-center w-[200px] sm:w-[260px] md:w-[260px] py-4 justify-evenly rounded-xl">
        <div className="text-[#FB7D5B] text-[60px]">
          <IoIosPeople />
        </div>
        <div className="flex flex-col justify-center items-center ">
          <p className="text-gray-500 text-[16px]">Teachers</p>
          <p className="text-[#FB7D5B] font-bold text-[30px]">35</p>
        </div>
      </div>

      <div className="border-2 border-[#FCC43E] flex flex-col sm:flex sm:flex-row  items-center w-[200px] sm:w-[260px] md:w-[260px] py-4 justify-evenly rounded-xl">
        <div className="text-[#FCC43E] text-[45px]">
          <BsFillCalendarEventFill />
        </div>
        <div className="flex flex-col justify-center items-center ">
          <p className="text-gray-500 text-[16px]">Events</p>
          <p className="text-[#FCC43E] font-bold text-[30px]">40</p>
        </div>
      </div>

      <div className="border-2 border-[#4D5DBA] flex flex-col sm:flex sm:flex-row  items-center w-[200px] sm:w-[260px] md:w-[260px] justify-evenly py-4  rounded-xl">
        <div className="text-[#4D5DBA] text-[60px]">
          <FaMoneyBill />
        </div>
        <div className="flex flex-col justify-center items-center ">
          <p className="text-gray-500 text-[16px]">Total Fees</p>
          <p className="text-[#4D5DBA] font-bold text-[30px]">₵ 230K</p>
        </div>
      </div>
    </div>
  );
};

export default QuickInfoBoard;
