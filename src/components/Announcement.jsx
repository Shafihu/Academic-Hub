'use client'

import React,{useState, useEffect} from 'react'
import mockAnnouncementsData from '@/utils/mockAnnouncementsData'
import Image from 'next/image'

const Announcement = () => {
    const [announcementsData, setAnnouncementsData] = useState([])

    useEffect(() => {
        const fetchAnnouncements = async () => {
            const res = await mockAnnouncementsData()
            setAnnouncementsData(res)
        }
        fetchAnnouncements()
    },[])
  

  return (

   <div className='flex flex-col gap-4'>
        {announcementsData.length > 0 ? (
            announcementsData.map((item, index) => (
                <div key={index} className='rounded-xl border border-gray-300 overflow-hidden cursor-pointer group'>
                    <div className='bg-white overflow-hidden h-[100px] rounded-t-xl'>
                        <Image src={item.img} alt='announcement pic' width={1000} height={1000} className='h-full w-full object-cover rounded-t-xl transition-transform transform group-hover:scale-110'/>
                    </div>
                    <div className='p-2 rounded-b-xl bg-white'>
                        <div>
                            <p className='text-indigo-600 font-medium text-[15px]'>{item.title}</p>
                            <p className='text-[13.5px] text-gray-500'>{item.subTitle}</p>
                        </div>
                        <p className='text-[13.5px] text-right text-gray-400'>{item.date}</p>
                     </div>
                </div>
            ))
        )
         : ( 
            <div>No announcements available!</div>
            )
         } 

    </div>

  )
}

export default Announcement






 