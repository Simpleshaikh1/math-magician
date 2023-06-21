import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link, useLocation } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: '/calculator', text: 'Calculator' },
  { path: '/quotes', text: 'Quotes' },
];

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? { color: 'purple' } : {});

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <Link to={link.path} style={isActive(link.path)}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
