import { Search,  Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../style.css";
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
    <div className="nav-container">
      <div className="nav-logo">
        <h1>InteriorHub</h1>
      </div>

      <div className="nav-links desktop-nav">
        <Link to='/'>Home</Link>
        <Link to='/explore'>Explore</Link>
        <Link to='/designers'>Designers</Link>
        <Link to='/about'>About</Link>
      </div>

      <div className="nav-icons desktop-nav">
        <button className="icon-button">
          <Search size={20} />
        </button>
      </div>

      <button 
        className="mobile-menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    {isMenuOpen && (
      <div className="mobile-menu">
        <a href="#">Home</a>
        <a href="#">Explore</a>
        <a href="#">Designers</a>
        <a href="#">About</a>
      </div>
    )}
  </nav>
  )
}

export default NavBar