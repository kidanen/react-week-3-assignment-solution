import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';

export default function Navbar() {
  const { dark, setDark } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">ReactWeek3</Link>
        <nav className="flex items-center gap-4">
          <NavLink to="/" className={({isActive}) => isActive ? 'underline' : ''}>Home</NavLink>
          <NavLink to="/users" className={({isActive}) => isActive ? 'underline' : ''}>Users</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'underline' : ''}>About</NavLink>

          <Button variant="secondary" onClick={() => setDark(!dark)} title="Toggle theme">
            {dark ? '🌙 Dark' : '☀️ Light'}
          </Button>
        </nav>
      </div>
    </header>
  );
}
