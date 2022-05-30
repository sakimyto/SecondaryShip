import { NextPage } from 'next';
import React from 'react';
import LinkButtonDiscord from '@/components/atoms/LinkButtonDiscord';
import LinkButtonGithub from '@/components/atoms/LinkButtonGithub';
import LinkButtonTwitter from '@/components/atoms/LinkButtonTwitter';
import projectConfig from '@/config/projectConfig';

const Footer: NextPage = () => (
  <footer className='p-4 text-center'>
    <div className='flex items-center justify-center py-4 space-x-2'>
      <LinkButtonTwitter />
      <LinkButtonGithub />
      <LinkButtonDiscord />
    </div>
    <p className='text-xs'>
      © 2022 <a href={projectConfig.twitterUrl}>{projectConfig.siteName}</a>
    </p>
  </footer>
);

export default Footer;
