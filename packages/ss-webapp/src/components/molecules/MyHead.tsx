import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import projectConfig from '@/config/projectConfig';

const MyHead: NextPage = () => (
  <Head>
    <title key='title'>
      {projectConfig.siteName} | {projectConfig.siteDescription}
    </title>

    <link key='ga-prefetch' rel='preconnect dns-prefetch' href='https://www.google-analytics.com' />
    <link key='canonical' rel='canonical' href={projectConfig.siteUrl} />

    <meta key='theme-color' name='theme-color' content='#252525' />
    <meta key='description' name='description' content={projectConfig.siteDescription} />
    <meta key='keywords' name='keywords' content='web3,crypto,blockchain' />

    <meta key='og:title' property='og:title' content={projectConfig.siteName} />
    <meta key='og:description' property='og:description' content={projectConfig.siteDescription} />
    <meta key='og:url' property='og:url' content={projectConfig.siteName} />
    <meta key='og:type' property='og:type' content='summary_large_image' />
    <meta key='og:image' property='og:image' content={projectConfig.ogImagePath} />
    <meta key='og:site_name' property='og:site_name' content={projectConfig.siteName} />

    <meta key='twitter:card' name='twitter:card' content='website' />
    <meta key='twitter:creator' name='twitter:creator' content={projectConfig.twitterUsername} />
    <meta key='twitter:title' name='twitter:title' content={projectConfig.siteName} />
    <meta
      key='twitter:description'
      name='twitter:description'
      content={projectConfig.siteDescription}
    />
    <meta key='twitter:image' name='twitter:image' content={projectConfig.ogImagePath} />

    <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
    <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
    <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
    <link rel='manifest' href='/favicon/site.webmanifest' />
    <link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#252525' />
    <meta name='msapplication-TileColor' content='#252525' />
    <meta name='theme-color' content='#ffffff' />

    <meta
      key='apple-mobile-web-app-title'
      name='apple-mobile-web-app-title'
      content={projectConfig.siteName}
    />
    <meta key='application-name' name='application-name' content={projectConfig.siteName} />
    <meta key='msapplication-TileColor' name='msapplication-TileColor' content='#252525' />
  </Head>
);

export default MyHead;
