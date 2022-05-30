import { NextPage } from 'next';
import { FaGithub } from 'react-icons/fa';
import projectConfig from '@/config/projectConfig';

const ButtonLinkGithub: NextPage = () => {
  return (
    <a
      href={projectConfig.githubUrl}
      aria-label={`${projectConfig.siteName} on Github`}
      rel='noopener noreferrer'
      target='_blank'
      className='p-2 rounded-full text-stone-50 bg-stone-700 hover:bg-zinc-500'
    >
      <FaGithub />
    </a>
  );
};

export default ButtonLinkGithub;
