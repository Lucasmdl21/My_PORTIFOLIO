import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">

      {/* CONTAINER DO MENU */}
      <div className="navbar-container">
        <div className="logo">Lucas</div>

      {/* MENU* HANBURGUER */}
        <button 
          className={`hamburger ${menuOpen ? 'open' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>  
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>Sobre</Link></li>
        <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projetos</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contato</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
