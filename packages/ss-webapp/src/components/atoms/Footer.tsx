import { NextPage } from 'next';
import React from 'react';
import projectConfig from '@/config/projectConfig';

const Footer: NextPage = () => (
  <footer className='p-4 text-center'>
    <p className='text-xs'>
      © 2022 <a href={projectConfig.twitterUrl}>{projectConfig.siteName}</a>
    </p>
  </footer>
);

export default Footer;
