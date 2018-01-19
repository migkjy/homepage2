import React from 'react';

const Footer = () => (
  // <footer className="py-5 bg-dark">
  <footer id="contact" className="py-5 bg-dark">
    <div className="container">
      <p className="m-0 text-center text-white">COPYRIGHT &copy; HYUNDAI HOUSING CONSTRUCTION. ALL RIGHT RESERVED</p>
      <hr className="my-4" />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 mx-auto text-center">
          <h2 className="section-heading text-white">현대주택공사</h2>
        </div>
        <div className="col-lg-9 ml-auto text-left">
          <p className="mb-1 text-white" >주소 : 강원도 강릉시 남부로 125번길 23</p>
          <p className="mb-1 text-white" >
            <i className="fa fa-phone" aria-hidden="true" />
            <span> 033)641-5632 &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <i className="fa fa-mobile" aria-hidden="true" />
            <span> 010-5371-1122 &nbsp;&nbsp;&nbsp;&nbsp;</span>
            <i className="fa fa-fax" aria-hidden="true" />
            <span> 033)641-5632 &nbsp;&nbsp;&nbsp;&nbsp;</span>
          </p>
          <p className="mb-1 text-white" >종합건설면허등록업체, 주택건설사업자등록업체</p>
          <p className="mb-1 text-white" >홈페이지 : www.hyundaihousing.com</p>
          <p className="mb-1 text-white">
            <a href="mailto:your-email@your-domain.com">feedback@naver.com</a>
          </p>
        </div>
      </div>
    </div>
  </footer>

);

export default Footer;
