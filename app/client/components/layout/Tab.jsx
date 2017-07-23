import React from 'react';
import { Link } from 'react-router-dom';


const Tab = () => (
  <div>
    <ul>
      <li><Link to="/">画报</Link></li>
      <li><Link to="/labs">有趣</Link></li>
    </ul>
  </div>
);


export default Tab;
