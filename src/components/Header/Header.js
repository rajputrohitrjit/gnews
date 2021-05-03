import React  from 'react';
import logo from '../../assets/logo.png';

import './Header.css';

const Header = () =>
{
    return (
      <nav>
        <div className="header">
      <img src={logo} href="/" alt="logo" className="logo float-left" />
      
    <a className="float-right m-2" href="https://newsapi.org/" title="newsAPI" target="_blank" rel="noreferrer">newsapi</a>
      <a className="float-right m-2" href="https://github.com/rajputrohitrjit/newsAPP" title="Github RepositoryLink" target="_blank" rel="noreferrer">Github </a>
  
      </div>
 
      </nav>
 
    );
  }
export default Header;