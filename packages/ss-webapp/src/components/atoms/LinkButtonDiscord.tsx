import { NextPage } from 'next';
import { FaDiscord } from 'react-icons/fa';
import projectConfig from '@/config/projectConfig';

const LinkButtonDiscord: NextPage = () => {
  return (
    <a
      href={projectConfig.discordUrl}
      aria-label={`${projectConfig.siteName} on Discord`}
      rel='noopener noreferrer'
      target='_blank'
      className='p-2 rounded-full text-stone-50 bg-stone-700 hover:bg-zinc-500'
    >
      <FaDiscord />
    </a>
  );
};

export default LinkButtonDiscord;
