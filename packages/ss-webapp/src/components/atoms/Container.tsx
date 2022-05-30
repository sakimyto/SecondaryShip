import { NextPage } from 'next';
import React from 'react';
import ContainerType from '@/@types/container';

const Container: NextPage<ContainerType> = ({ children }) => (
  <div className='container px-4 mx-auto'>{children}</div>
);

export default Container;
