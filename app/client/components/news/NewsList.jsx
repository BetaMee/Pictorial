import React from 'react';
import PropTypes from 'prop-types';

const NewsList = ({ img, title, tags, isReq }) => (
  <div>
    <div>
      <p>{title}</p>
      <p>{tags}</p>
    </div>
    <div>
      <img src={img} alt="hhh" />
    </div>
  </div>
);

NewsList.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  isReq: PropTypes.bool.isRequired,
};

export default NewsList;
