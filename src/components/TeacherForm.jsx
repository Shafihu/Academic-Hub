'use client'

import React, { useState, useEffect } from 'react';
import mockClassesData from '@/utils/mockClassesData';

const TeacherForm = () => {
    const [classRoomsData, setClassRoomsData] = useState([])

 useEffect(()=>{
    const fetchClassRooms = async () => {
        const res = await mockClassesData();
        setClassRoomsData(res);
      }
      fetchClassRooms();
 },[])


  const initialFormData = {
    fullName: '',
    email: '',
    password: '',
    class: '',
    gender: '',
    subject: '',
    salary: '',
    phoneNumber: '',
    designation: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Clear the form inputs
    setFormData(initialFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto  space-y-4 z-50 ">
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
      />
      <select
        name="class"
        value={formData.class}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
      >
        <option value="">Class</option>
        {classRoomsData.map((item, index) => (
            <option key={index}>{item.class}</option>
        ))}
      </select>
      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
      >
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
      />
      <input
        type="text"
        name="salary"
        placeholder="Salary"
        value={formData.salary}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
      />
      <input
        type="text"
        name="designation"
        placeholder="Designation"
        value={formData.designation}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add Teacher
      </button>
    </form>
  );
};

export default TeacherForm;
