import React from 'react';
import classNames from 'classnames';
import S from './WrapGasket.css';

const WrapGasket = WrappedComponent => () => (
  <div className={classNames(S.container, S.animated)}>
    <WrappedComponent />
  </div>
);

export default WrapGasket;
