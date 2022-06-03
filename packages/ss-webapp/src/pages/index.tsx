import { NextPage } from 'next';

import Section from '@/components/atoms/Section';
import MyHead from '@/components/molecules/MyHead';
import Layout from '@/components/templates/Layout';
import projectConfig from '@/config/projectConfig';

const Index: NextPage = () => (
  <>
    <Layout>
      <MyHead />
      <div className='flex flex-col h-screen'>
        <Section className='flex flex-col items-center justify-center h-screen px-8 text-center'>
          <h1 className='mb-4 text-4xl font-bold'>{projectConfig.siteName}</h1>
          <p className='text-lg font-bold'>{projectConfig.siteDescription}</p>
        </Section>
      </div>
    </Layout>
  </>
);

export default Index;
