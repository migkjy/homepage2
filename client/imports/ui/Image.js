import React from 'react';
import PropTypes from 'prop-types';

const Image = props => (
  <section className="py-5 bg-image-full" style={{ backgroundImage: props.backgroundImage }}>
    {/* Put anything you want here! There is just a spacer below for demo purposes! */}
    <div style={{ height: 200 }} />
  </section>
);

Image.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};


export default Image;
