import React from 'react';
import { Link } from 'react-router-dom';

// 样式
import S from './NavPanel.css';

const NavPanel = () => (
  <div className={S.container}>
    <header className={S.header}>
      <div className={S.logo} />
    </header>
    <ul className={S.menu}>
      <Link to="/dashboard"><li>配置-新闻</li></Link>
      <Link to="/dashboard/voice"><li>配置-Voice</li></Link>
      <Link to="/dashboard/vote"><li>配置-Vote</li></Link>
      <Link to="/dashboard/guess"><li>配置-Guess</li></Link>
    </ul>
  </div>
);

export default NavPanel;
