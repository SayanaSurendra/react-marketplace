import React from 'react';

const navLinks = [
    { name: "Login", href: "#" },
    { name: "Sign Up", href: "#" },
    { name: "About", href: "#" },
    
  ];

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className='container-fluid'>
          <ul className="navbar-nav me-auto">
          {navLinks.map((link) => (
            <li key={link.name} className="nav-item">
              <a className="nav-link" href={link.href}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
            </div>  
        </nav>
    );
};

export default Navbar;