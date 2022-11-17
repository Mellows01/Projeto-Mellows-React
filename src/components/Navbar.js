import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown, FiChevronsDown } from "react-icons/fi";
import logo from './img/logoMellows.png';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" id='nav'>
      <div className="container-fluid">
        <a href="/" className="navbar-brand"><img src={logo} /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link" aria-current="page">Home</a>
            </li>
            <li className="nav-item">
              <a href="/QuemSomos" className="nav-link">Quem somos</a>
            </li>
            <li className="nav-item">
              <a href="/LivrosInt" className="nav-link">Livros interativos</a>
            </li>
            <li className="nav-item">
              <a href="/TrocaLivros" className="nav-link">Troque seus livros</a>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Login
              </a>
              <ul className="dropdown-menu">
                <li><a href="/Cadastro" className="dropdown-item">Cadastre-se</a></li>
                <li><a href="/AdminArea" className="dropdown-item">Administrador</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar