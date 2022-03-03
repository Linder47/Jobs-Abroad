import React, { Component } from 'react';
//import { render } from 'react-dom';
import { Routes, Route, Link } from "react-router-dom";
import './Header.css';
import {
  BrowserRouter as Router,
  NavLink,
} from 'react-router-dom';

// class Header extends Component {
//     render() {


//         return (
//             <div className='articleElement'>
//                 <div className='articleImage'></div>

//             </div>
//         )
//     }
// }

// export default Header;


function Header() {
  return (
    <Router>
      <div className="nav">
      <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'link active' : 'link  inactive')}
        >
          Главная
        </NavLink>
        <NavLink
          to="vacations"
          className={({ isActive }) => (isActive ? 'link active' : 'link  inactive')}
        >
          Вакансии
        </NavLink>
        <NavLink
          to="contacts"
          className={({ isActive }) => (isActive ? 'link active' : 'link inactive')}
        >
          Контакты
        </NavLink>
      </div>
    </Router>


  );
}

export default Header;