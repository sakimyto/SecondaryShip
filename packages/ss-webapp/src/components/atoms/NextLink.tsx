import { NextPage } from 'next';
import Link from 'next/link';
import NextLinkType from '@/@types/nextLink';

const NextLink: NextPage<NextLinkType> = ({ href, children, ...rest }) => {
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
};

export default NextLink;
