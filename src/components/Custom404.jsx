'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {

    const timeout = setTimeout(() => {
      router.push('/login');
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [router]);

  return ;
};

export default Custom404;
