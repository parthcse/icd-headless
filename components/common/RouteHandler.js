'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function RouteHandler() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.icdInitPage === 'function') {
      window.icdInitPage();
    }
  }, [pathname]);

  return null;
}
