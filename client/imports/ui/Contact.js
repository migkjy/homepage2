import React from 'react';

const ContentSecond = () => (
  <section id="contact" className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">견적 문의하기</h2>
          <hr className="my-4" />
          <p className="mb-5">고객 맞춤의 합리적인 금액으로 만족을 드리도록 하겠습니다. <br />고민하지 마시고 편하게 연락하세요.</p>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 ml-auto text-center">
          <i className="fa fa-phone fa-3x mb-3 sr-contact" />
          <p>010-5371-1122</p>
        </div>
        <div className="col-lg-4 mr-auto text-center">
          <i className="fa fa-envelope-o fa-3x mb-3 sr-contact" />
          <p>
            <a href="mailto:your-email@your-domain.com">father-email@naver.com</a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ContentSecond;
