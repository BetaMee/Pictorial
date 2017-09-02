import React from 'react';
import { NavLink } from 'react-router-dom';

// 样式
import S from './NavPanel.css';

const NavPanel = () => (
  <div className={S.container}>
    <header className={S.header}>
      <div className={S.logo} />
    </header>
    <p className={S.title}>内容配置</p>
    <ul className={S.menu}>
      <li><NavLink activeClassName={S.menuactive} to="/dashboard/news">新闻</NavLink></li>
      <li><NavLink activeClassName={S.menuactive} to="/dashboard/voice">Voice</NavLink></li>
      <li><NavLink activeClassName={S.menuactive} to="/dashboard/vote">Vote</NavLink></li>
      <li><NavLink activeClassName={S.menuactive} to="/dashboard/guess">Guess</NavLink></li>
    </ul>
  </div>
);

export default NavPanel;
