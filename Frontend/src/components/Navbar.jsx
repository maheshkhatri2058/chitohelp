import React, { useState } from 'react';
import {Route,Routes,Link} from 'react-router-dom'
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', to: '/' },
    { name: 'ABOUT', to: '/about'},
    { name: 'SERVICES', to: '/services' },
    { name: 'CONTACT', to: '/contact' },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center">
              <img src='logo2.png' className='h-16 w-16'></img>
            </a>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.to}
                className="text-gray-700 font-semibold hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="px-4 py-2 rounded-md border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition"
            >
              Sign in
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:opacity-95 transition"
            >
              Get started
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {/* animated hamburger */}
              <svg
                className={`w-6 h-6 transition-transform ${open ? 'transform rotate-90' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 6h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (slide down) */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-4 border-t">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#"
              className="w-full text-center px-4 py-2 rounded-md border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition"
            >
              Sign in
            </a>
            <a
              href="#"
              className="w-full text-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:opacity-95 transition"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
