import React from 'react';
import Navigation from './ui/Navigation';
import Header from './ui/Header';
import Content1 from './ui/Content1';
import Content3 from './ui/Content3';
import Image from './ui/Image';
import Footer from './ui/Footer';
import Contact from './ui/Contact';

const Index = () => (
  <div>
    <Navigation />
    <Header />
    <Content1 />
    <Image backgroundImage={`url("/images/pic2.jpg")`} />
    <Content3 />
    <Image backgroundImage={`url("/images/pic4.jpg")`} />
    <Contact />
    <Footer />
  </div>
);

export default Index;
