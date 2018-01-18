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
              <img className="card-img-top" src="/images/cardpic1.jpg" alt="Card image cap" />
              <div className="card-body">
                <h3>신축</h3>
                {/* <h3 className="mb-3">신축</h3> */}
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="service-box mt-5 mx-auto">
            <div className="card">
              <img className="card-img-top" src="/images/cardpic2.jpg" alt="Card image cap" />
              <div className="card-body">
                <h3 className="mb-3">리모델링</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="service-box mt-5 mx-auto">
            <div className="card">
              <img className="card-img-top" src="/images/cardpic3.jpg" alt="Card image cap" />
              <div className="card-body">
                <h3 className="mb-3">인테리어</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 text-center">
          <div className="service-box mt-5 mx-auto">
            <div className="card">
              <img className="card-img-top" src="/images/cardpic4.jpg" alt="Card image cap" />
              <div className="card-body">
                <h3 className="mb-3">수리</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContentSecond;
