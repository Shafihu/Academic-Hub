'use client';

import Custom404 from '@/components/Custom404';
import React, { useState, useEffect } from 'react';
import { BiSolidSearchAlt2 } from "react-icons/bi";
import mockTeachersData from '@/utils/mockTeachersData';
import Papa from 'papaparse';
import Image from 'next/image';

const Page = () => {
  const [user, setUser] = useState(null);
  const [teachersData, setTeachersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('')

  const handleDownload = () => {
    const headers = [
      { label: "Id", key: "id" },
      { label: "Name", key: "name" },
      { label: "Subject", key: "subject" },
      { label: "Class", key: "class" },
      { label: "Email Address", key: "email" },
      { label: "Gender", key: "gender" },
      { label: "Year_Joined", key: "yearJoined" },
      { label: "Salary", key: "salary" },
      { label: "Contact", key: "contact" },
    ];

    const csvString = Papa.unparse({
      fields: headers.map(header => header.label),
      data: teachersData.map(teacher => [
        teacher.id,
        teacher.name,
        teacher.subject,
        teacher.class,
        teacher.email,
        teacher.gender,
        teacher.yearJoined,
        teacher.salary,
        teacher.contact,
      ])
    });

    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'teachers.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const fetchTeachers = async () => {
      setLoading(true);
      try {
        const res = await mockTeachersData();
        setTeachersData(res);
      } catch (error) {
        console.log('Failed to fetch teachers: ' + error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeachers();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const filteredData = teachersData.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className='flex flex-col px-[25px] sm:p-[30px] w-full flex-1 h-screen overflow-y-auto pt-[80px] lg:pt-8 relative gap-6 '>
      <div className='flex gap-5'>
        <button className='bg-indigo-600 text-white font-semibold rounded-lg py-2 px-4 hover:bg-indigo-500'>Add Teacher</button>
        <button className='font-semibold text-indigo-600 border-[2px] rounded-md hover:border-indigo-600 py-2 px-4' onClick={handleDownload}>Export CSV</button>
      </div>

      <div className="relative rounded-lg">
        <input className="rounded-md border px-4 py-2 pl-10 text-indigo-600 focus:outline-none focus:border-indigo-500 w-full" placeholder="Search for teacher by name or email" value={searchQuery} onChange={handleSearchChange}/>
        <BiSolidSearchAlt2 className="absolute left-[10px] top-[50%] -translate-y-[50%] text-indigo-600 text-[18px]" />
      </div>

      {loading ? <div className='text-gray-400 text-[15px]'>Loading...</div> : (
        <div className="overflow-x-auto">
          {filteredData.length > 0 ? (
            <>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Id</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Subject</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Class</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Email Address</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Gender</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Salary</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Phone Number</th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white cursor-pointer hover:scale-[1.02]' : 'bg-violet-50 cursor-pointer hover:scale-[1.02]' }>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">{row.id}</td>
                      <td className="flex items-center gap-3 px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600"><Image src={row.img} width={30} height={30}/> {row.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-500">{row.subject}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-500">{row.class}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-500">{row.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-500">{row.gender}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-500">{row.salary}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-500">{row.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <div className='text-gray-300 text-[15px]'>No teachers found!</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
