import '@/styles/globals.scss';

import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import React from 'react';
import GoogleAnalytics from '@/components/atoms/GoogleAnalytics';
import { usePageView } from '@/hooks/usePageView';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  usePageView();
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
