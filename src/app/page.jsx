'use client'

import {useEffect, useState} from 'react'
import { onAuthStateChanged} from "firebase/auth";
import { FIREBASE_AUTH } from './firebase/config';
import { useRouter } from "next/navigation";

const Root = () => {
  const router = useRouter();
  // const userSession = sessionStorage.getItem('user');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        router.push('/dashboard')
      }else {
        router.push('/login'); 
      }
    })
    return () => unsubscribe();
}, [])
}

export default Root;