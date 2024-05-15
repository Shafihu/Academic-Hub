'use client';

import Custom404 from '@/components/Custom404';
import React, { useState, useEffect } from 'react';

const page = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfoString = sessionStorage.getItem('userInfo');
    if (userInfoString) {
      const user = JSON.parse(userInfoString);
      setUser(user);
    }
  }, []); 

  if (!user) {
    return <Custom404 />
  }

  return (
    <div className=' flex-1 w-3.4/4 h-screen overflow-y-auto'>Teacher : {user && user.email}</div>
  )
}

export default page