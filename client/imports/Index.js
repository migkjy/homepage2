import React from 'react';
import Navigation from './ui/Navigation';
import Header from './ui/Header';
import Content1 from './ui/Content1';
import Content2 from './ui/Content2';
import Content3 from './ui/Content3';
import Image from './ui/Image';
import Footer from './ui/Footer';
import Footer2 from './ui/Footer2';

const Index = () => (
  <div>
    <Navigation />
    <Header />
    <Content1 />
    <Image />
    {/* <Content2 /> */}
    <Content3 />
    {/* <Footer /> */}
    <Footer2 />
  </div>
);

export default Index;
