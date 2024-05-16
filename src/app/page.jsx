'use client'

import {useEffect, useState} from 'react'
import { useRouter } from "next/navigation";

const Root = () => {
  const router = useRouter();
  const [user, setUser] = useState(null)
  // const userSession = sessionStorage.getItem('user');

  useEffect(() => {
    const userInfoString = sessionStorage.getItem('userInfo');
    if (userInfoString) {
      const userData = JSON.parse(userInfoString);
      setUser(userData);
    }
  }, []); 

  if (user) {
    router.push('/dashboard');
  } else {
    router.push('/login');
  }

}

export default Root;