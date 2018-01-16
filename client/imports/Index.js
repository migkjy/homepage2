import React from 'react';

const Index = () => (
  <div>
    {/* Navigation */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* Header - set the background image for the header in the line below */}
    <header className="py-5 bg-image-full" style={{ backgroundImage: 'url("https://unsplash.it/1900/1080?image=1076")' }}>
      <img className="img-fluid d-block mx-auto" src="http://placehold.it/200x200&text=Logo" />
    </header>
    {/* Content section */}
    <section className="py-5">
      <div className="container">
        <h1>Section Heading</h1>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit vel itaque amet.</p>
      </div>
    </section>
    {/* Image Section - set the background image for the header in the line below */}
    <section className="py-5 bg-image-full" style={{ backgroundImage: 'url("https://unsplash.it/1900/1080?image=1081")' }}>
      {/* Put anything you want here! There is just a spacer below for demo purposes! */}
      <div style={{ height: 200 }} />
    </section>
    {/* Content section */}
    <section className="py-5">
      <div className="container">
        <h1>Section Heading</h1>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit vel itaque amet.</p>
      </div>
    </section>
    {/* Footer */}
    <footer className="py-5 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">Copyright © Your Website 2017</p>
      </div>
      {/* /.container */}
    </footer>
    {/* Bootstrap core JavaScript */}
  </div>
);

export default Index;
