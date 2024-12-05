'use client';
import React from 'react';

import dynamic from 'next/dynamic';

const Theme = dynamic(() => import('@/components/theme/Theme'), { ssr: false });

const ClientTheme = () => {
  return <Theme />;
};

export default ClientTheme;
