import { NextPage } from 'next';
import React from 'react';
import SectionType from '@/@types/section';

const Section: NextPage<SectionType> = ({ children, className }) => (
  <section className={`py-8 md:py-16 ${className}`}>{children}</section>
);

export default Section;
