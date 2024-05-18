'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { IoIosCloseCircle } from "react-icons/io";
import Link from 'next/link';
import { FIREBASE_AUTH } from '@/app/firebase/config';
import { signOut } from 'firebase/auth';

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen((prev) => !prev)
    }

  return (
    <div className='flex lg:hidden bg-indigo-500 text-white absolute top-0 right-0 w-full h-[70px] items-center justify-between px-5 z-[100]'>
    <div className='flex gap-2 items-center'>
        <div className="bg-white rounded-full">
            <Image
                className="object-cover object-center"
                src="/logo.png"
                width={45}
                height={45}
                alt="Logo"
              />
        </div>
        <h2 className='font-bold'>School Mangement System</h2>
    </div>
    <div onClick={toggleNav} className="bg-white w-[30px] h-[30px] rounded-full overflow-hidden cursor-pointer">
            <Image
                  className="object-cover object-center  bg-red-400 "
                  src="/profilePic2.jpg"
                  width={1000}
                  height={1000}
                  alt="Profile Pictuer"
            />
        </div>

{isOpen && (
            <div className='bg-indigo-500 absolute top-0 right-0 z-50 w-[50%] min-h-screen p-5 text-white flex flex-col gap-10'>
            <div className='flex items-center justify-end cursor-pointer'><IoIosCloseCircle onClick={toggleNav} className='text-[25px] text-white'/></div>

            <div className='flex flex-col gap-4 items-end'>
                <Link href="/dashboard" onClick={toggleNav}>Dashboard</Link>
                <Link href="/dashboard/teachers" onClick={toggleNav}>Teachers</Link>
                <Link href="/dashboard/students" onClick={toggleNav}>Students/Classes</Link>
                <Link href="/dashboard/billings" onClick={toggleNav}>Billings</Link>
                <Link href="/dashboard/exams" onClick={toggleNav}>Exams</Link>
                <Link href="/dashboard/admission-form" onClick={toggleNav}>Admission Form</Link>
                <Link href="/dashboard/admission-form-list" onClick={toggleNav}>Admission Form List</Link>
                <Link href="/dashboard/events" onClick={toggleNav}>Events</Link>
                <Link href="/dashboard/settings&profile" onClick={toggleNav}>Settings & Profile</Link>
                <button onClick={()=> signOut(FIREBASE_AUTH)}>Logout</button>
            </div>
            </div>
)}
    </div>
  )
}

export default MobileNav