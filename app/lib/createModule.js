import React from 'react';
// 使用react-router的代码分割
import Bundle from '../lib/bundle';

/**
 * code spliting
 * @param {*} Component
 */
const createModule = (Component, Loading) => () => (
  <Bundle load={Component}>
    {Mod => (Mod ? <Mod /> : <Loading />)}
  </Bundle>
);

export default createModule;
