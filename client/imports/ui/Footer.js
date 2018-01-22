import React from 'react';

const Footer = () => (
  // <footer className="py-5 bg-dark">
  <footer className="py-5 bg-dark text-white footer">
    <div className="container">
      <p className="m-0 text-center">COPYRIGHT &copy; HYUNDAI HOUSE CONSTRUCTION. ALL RIGHT RESERVED</p>
      <hr className="my-4" />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 mx-auto text-center">
          <h2 className="section-heading">현대주택공사</h2>
        </div>
        <div className="col-lg-9 ml-auto text-left">
          <p className="mb-1" >주소 : 강원도 강릉시 남부로 125번길 23</p>
          <div>
            <p className="mb-1 inlineP" >
              <i className="fa fa-mobile" aria-hidden="true"> &nbsp; 010-5371-1122 </i>
            </p>
            <p className="mb-1 inlineP" >
              <i className="fa fa-phone" aria-hidden="true"> &nbsp; 033)645-0880 </i>
            </p>
            <p className="mb-1 inlineP" >
              <i className="fa fa-fax" aria-hidden="true"> &nbsp; 033)641-5632 </i>
            </p>
          </div>
          <div>
            <p className="mb-1 inlineP" >사업자등록번호: 226-13-70210</p>
            <p className="mb-1 inlineP" >주택건설사업자등록업체 </p>
          </div>
          <p className="mb-1 inlineP" >홈페이지 : www.hyundaihc.com</p>
          <p className="mb-1">
            <a href="mailto:your-email@your-domain.com">migkjy3@naver.com</a>
          </p>
        </div>
      </div>
    </div>
  </footer>

);

export default Footer;
