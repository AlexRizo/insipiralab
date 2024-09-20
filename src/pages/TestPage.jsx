import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';

export const TestPage = () => {
  const { pathname } = useLocation();
  const [hoveredLink, setHoveredLink] = useState(null);

  const navItems = [
    { path: '/', label: 'INICIO' },
    { path: '/maquila', label: 'MAQUILA' },
    { path: '/nosotros', label: 'NOSOTROS' },
    { path: '/contacto', label: 'CONTACTO' },
  ];

  return (
    <nav className="flex space-x-4 items-center justify-center h-screen">
      {navItems.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={`relative px-4 py-2 border-b-2 transition-all 
            ${pathname === path && hoveredLink !== path ? 'border-white' : ''} 
            ${hoveredLink === path ? 'border-white' : ''}
            ${hoveredLink !== null && hoveredLink !== path && pathname === path ? 'border-transparent' : ''} 
            ${pathname !== path && hoveredLink !== path ? 'border-transparent' : ''}
          `}
          onMouseEnter={() => setHoveredLink(path)}
          onMouseLeave={() => setHoveredLink(null)}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};