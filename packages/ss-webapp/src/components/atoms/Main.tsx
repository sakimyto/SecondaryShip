import { NextPage } from 'next';
import React from 'react';
import MainType from '@/@types/main';

const Main: NextPage<MainType> = ({ children }) => <main>{children}</main>;

export default Main;
