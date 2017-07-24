import React from 'react';
import PropTypes from 'prop-types';
import S from './NewsList.css';

const NewsList = ({ img, title, tags, isReq }) => (
  <div className={S.container}>
    <div className={S.description}>
      <p>{title}</p>
      <p>{tags}</p>
    </div>
    <div className={S.image}>
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
