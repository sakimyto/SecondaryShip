import { NextPage } from 'next';
import React from 'react';

import LayoutType from '@/@types/layout';
import Footer from '@/components/atoms/Footer';
import Main from '@/components/atoms/Main';
import Header from '@/components/organisms/Header';

const Layout: NextPage<LayoutType> = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

export default Layout;
