'use client'

import {useEffect} from 'react'
import { useRouter } from "next/navigation";

const Root = () => {
  const router = useRouter();

    useEffect(() => {
      router.push('/auth/login');
    },[])
}

export default Root;