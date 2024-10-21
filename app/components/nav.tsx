'use client';
import { useState } from 'react';
import Image from 'next/image';
// @ts-ignore
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import styles from '../page.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-container']}>
        <div className={styles['navbar-logo']}>
          <Image
            src="/Capture 1.PNG"
            alt="Logo"
            height={50}
            width={70}
            className="rounded transform transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
        <div className={styles['navbar-links']}>
          <a href="/" className={styles['navbar-link']}>Home</a>
          <a href="/about" className={styles['navbar-link']}>About</a>
          <a href="/skill" className={styles['navbar-link']}>Skills</a>
          <a href="/contact" className={styles['navbar-link']}>Contact</a>
          <a href="/project" className={styles['navbar-link']}>Project</a>
        </div>
        <div className={styles['menu-button']} onClick={toggleMenu}>
          {isOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </div>
      </div>

      <div
 className={`${styles['mobile-menu']} ${isOpen ? styles['open'] : ''}`}>
      
        <div className={styles['mobile-menu-content']}>
          <a href="/" className="block text-white hover:text-gray-300">Home</a>
          <a href="/about" className="block text-white hover:text-gray-300">About</a>
          <a href="/skill" className="block text-white hover:text-gray-300">Skills</a>
          <a href="/contact" className="block text-white hover:text-gray-300">Contact</a>
          <a href="/project" className="block text-white hover:text-gray-300">Project</a>
        </div>
      </div>
    </nav>
  );
}
