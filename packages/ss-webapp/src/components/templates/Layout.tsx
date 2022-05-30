import { NextPage } from 'next';
import React from 'react';

import LayoutType from '@/@types/layout';
import Footer from '@/components/atoms/Footer';
import Header from '@/components/atoms/Header';
import Main from '@/components/atoms/Main';

const Layout: NextPage<LayoutType> = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

export default Layout;
