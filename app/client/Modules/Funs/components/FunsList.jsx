import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import S from './FunsList.css';

const typeArr = {
  voice: '大声',
  guess: '你猜',
  vote: '投票',
};

const FunsList = ({ match, type, id, src, title, subtitle }) => (
  <Link to={`${match.path}/${type}/${id}`} className={S.container}>
    <div>
      <img src={src} alt="hh" />
    </div>
    <p className={S.title}><span>{typeArr[type]}</span>{` | ${title}`}</p>
    <p className={S.subtitle}>{subtitle}</p>
  </Link>
);

FunsList.propTypes = {
  match: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default FunsList;
