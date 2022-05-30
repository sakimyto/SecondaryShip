import '@/styles/globals.scss';

import { Web3ReactProvider } from '@web3-react/core';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import React from 'react';
import GoogleAnalytics from '@/components/atoms/GoogleAnalytics';
import { usePageView } from '@/hooks/usePageView';
import { getLibrary } from '@/utils/connectors';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  usePageView();
  return (
    <>
      <GoogleAnalytics />
      <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </>
  );
};

export default MyApp;
