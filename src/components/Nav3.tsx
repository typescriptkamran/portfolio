"use client"
import React, { useState, useEffect } from 'react';
import Tuggle from './Tuggle';
import Nav2 from './Nav2';

const Nav3 = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isSticky ? 'fixed top-0 left-0 w-full bg-white shadow-md z-50' : ''
      }`}
    >
      <div className="container mx-auto py-4">
        <Nav2 />    
      </div>
    </nav>
  );
};

export default Nav3;
