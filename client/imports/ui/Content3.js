import React from 'react';

const ContentSecond = () => (
  <section id="services" className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">사업영역</h2>
          <hr className="my-4" />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 text-center">
          <div className="service-box mt-5 mx-auto">
            <div className="card">
              <img className="card-img-top" src="/images/cardpic1.png" alt="Card image cap" />
              <div className="card-body">
                <h3 className="mb-3">신축</h3>
                <p className="card-text">단독주택 &bull; 빌라 &bull; 다가구 &bull; 상가주택 &bull; 전원주택 &bull; 도시형생활주택 &bull; 근린상가 등 신축 증축 개축</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="service-box mt-5 mx-auto">
            <div className="card">
              <img className="card-img-top" src="/images/cardpic2.png" alt="Card image cap" />
              <div className="card-body">
                <h3 className="mb-3">리모델링</h3>
                <p className="card-text">상가 내외부 리모델링 &bull; 아파트 및 주택 내부구조변경 &bull; 모텔 &bull; 목욕탕 등 각종 리모델링 시공경력 </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="service-box mt-5 mx-auto">
            <div className="card">
              <img className="card-img-top" src="/images/cardpic3.png" alt="Card image cap" />
              <div className="card-body">
                <h3 className="mb-3">인테리어</h3>
                <p className="card-text">도배 및 장판 &bull; 샷시 시공 &bull; 상가 내외부 인테리어 &bull; 아파트 및 주택 내부 등 각종 인테리어 시공</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="service-box mt-5 mx-auto">
            <div className="card">
              <img className="card-img-top" src="/images/cardpic4.png" alt="Card image cap" />
              <div className="card-body">
                <h3 className="mb-3">수리</h3>
                <p className="card-text">각종 주택 및 상가 건물 하자보수공사 &bull; 보일러 수리 및 시공 &bull; 드라이비트 &bull; 페인트 &bull; 콘크리트 공사 등</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContentSecond;
