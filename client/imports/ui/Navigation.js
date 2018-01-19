import Blaze from 'meteor/gadicc:blaze-react-component';
import React, { Component } from 'react';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      show: 'hide',
    };
    this.toggleClick = this.toggleClick.bind(this);
  }
  toggleClick() {
    this.setState({
      toggle: !this.state.toggle,
      show: this.state.toggle ? 'show' : 'hide',
    });
  }
  render() {
    return (
      <nav id="navBar" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <strong>현대주택공사</strong>
          </a>
          <Blaze template="loginButtons" />
          <button onClick={this.toggleClick} className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse ${this.state.show}`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              {/* active class need to be changed with clicking */}
              <li className="nav-item active">
                <a onClick={this.toggleClick} className="nav-link" href="#">Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a onClick={this.toggleClick} className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a onClick={this.toggleClick} className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a onClick={this.toggleClick} className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
