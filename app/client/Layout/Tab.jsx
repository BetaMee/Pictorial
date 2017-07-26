import React from 'react';
import { NavLink } from 'react-router-dom';

import S from './Tab.css';

const Tab = () => (
  <ul className={S.ul}>
    <li><NavLink activeClassName={S.active} to="/news">旧闻</NavLink></li>
    <li><NavLink activeClassName={S.active} to="/funs">有趣</NavLink></li>
  </ul>
);


export default Tab;
