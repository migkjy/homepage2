import React from 'react';

const Header = () => (
  <header id="home" className="py-5 bg-image-full" style={{ backgroundImage: 'url("/images/pic1.jpg")' }}>
    <div className="container" style={{ height: 200 }} >
      <img className="img-fluid d-block mx-auto" src="/images/logo0.png" />
    </div>
  </header>
);

export default Header;
