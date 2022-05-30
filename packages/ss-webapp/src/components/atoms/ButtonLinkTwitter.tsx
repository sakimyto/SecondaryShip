import { NextPage } from 'next';
import { FaTwitter } from 'react-icons/fa';
import projectConfig from '@/config/projectConfig';

const ButtonLinkTwitter: NextPage = () => {
  return (
    <a
      href={projectConfig.twitterUrl}
      aria-label={`${projectConfig.siteName} on Twitter`}
      rel='noopener noreferrer'
      target='_blank'
      className='p-2 rounded-full text-stone-50 bg-stone-700 hover:bg-zinc-500'
    >
      <FaTwitter />
    </a>
  );
};

export default ButtonLinkTwitter;
