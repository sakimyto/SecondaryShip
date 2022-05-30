import { NextPage } from 'next';

import ButtonLinkDiscord from '@/components/atoms/ButtonLinkDiscord';
import ButtonLinkGithub from '@/components/atoms/ButtonLinkGithub';
import ButtonLinkTwitter from '@/components/atoms/ButtonLinkTwitter';
import Footer from '@/components/atoms/Footer';
import Section from '@/components/atoms/Section';
import MyHead from '@/components/molecules/MyHead';
import projectConfig from '@/config/projectConfig';

const Index: NextPage = () => (
  <>
    <MyHead />
    <div className='flex flex-col h-screen bg-pixel'>
      <main>
        <Section className='flex flex-col items-center justify-center h-screen px-8 text-center'>
          <h1 className='mb-4 text-4xl font-bold'>{projectConfig.siteName}</h1>
          <p className='mb-4 text-lg font-bold'>{projectConfig.siteDescription}</p>
          <div className='flex items-center space-x-4'>
            <ButtonLinkDiscord />
            <ButtonLinkTwitter />
            <ButtonLinkGithub />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  </>
);

export default Index;
