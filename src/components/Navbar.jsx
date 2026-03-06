import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isDark, setIsDark] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar glass ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#" className="logo">
                    <span className="logo-text">SE.</span>
                </a>

                {/* Desktop Menu */}
                <ul className="nav-menu">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="nav-item">
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </ul>

                {/* Mobile Toggle */}
                <div className="mobile-actions">
                    <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu glass ${isMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
