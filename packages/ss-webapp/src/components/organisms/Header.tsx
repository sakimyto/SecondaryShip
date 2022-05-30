import { NextPage } from 'next';

import LinkButtonGithub from '../atoms/LinkButtonGithub';
import LinkButtonTwitter from '../atoms/LinkButtonTwitter';
import Container from '@/components/atoms/Container';
import NextLink from '@/components/atoms/NextLink';
import ConnectButton from '@/components/molecules/ConnectButton';
import projectConfig from '@/config/projectConfig';

const Header: NextPage = () => {
  return (
    <header className='py-4 border-b'>
      <Container>
        <div className='block sm:items-center sm:justify-between sm:flex'>
          <NextLink href='/' className='inline-block mb-2 text-2xl font-bold sm:mb-0'>
            <span className='flex items-center'>{projectConfig.siteName}</span>
          </NextLink>

          <div className='flex items-center space-x-2'>
            <div className='inline-flex justify-end w-full'>
              <ConnectButton />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
