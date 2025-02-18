import { useState } from 'react'
import { Link } from 'react-router-dom';
import mobile_menu from '../assets/mobile_menu_icon.svg'
import logo from '../assets/GATEWAY-2.png'
import logo_resized from '../assets/GATEWAY-2-final.png'

const Navbar = () => {
  const [bMobileMenu, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => 
    {
      setMobileMenuOpen(!bMobileMenu);
    }
    
  const [showMore, setShowMore] = useState(false);
  const handleLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    toggleMobileMenu(); 
  };
    return (
        <nav className="w-full bg-gray-500 flex items-center relative">
          <a href="/" className="bg-gateway-logo-light flex space-x-2 flex-none px-10">
            <img src={logo_resized} alt="Company Logo" className="max-w-72 h-28 cursor-pointer object-contain"/>
          </a>
          <ul className="hidden md:flex flex-1 justify-end space-x-9 text-base font-semibold text-white uppercase tracking-tighter px-12">
            <li><Link to="/about" className="hover:text-gateway-logo transition-colors duration-300">About Us</Link></li>
            <li><Link to="/products" className="hover:text-gateway-logo transition-colors duration-300">Products</Link></li>
            <li><Link to="/blog" className="hover:text-gateway-logo transition-colors duration-300">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-gateway-logo-complement transition-colors duration-300">Contact Us</Link></li>
          </ul>

          <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMobileMenu}>
            <img src={mobile_menu} alt="Menu" className="w-6 h-6" />
          </button>
          
          {/* flex flex-col items-center space-y-4 text-gray-700 absolute top-16 left-1/2 transform -translate-x-1/2 w-11/12 bg-white py-6 shadow-lg rounded-lg transition-all duration-300 ease-in-out ${bMobileMenu ? 'block' : 'hidden'} md:hidden */}

          <ul className={`flex flex-col space-y-4 text-gray-800 uppercase leading-tight font-semibold text-sm absolute 
                          top-16 left-1/2 z-50 transform -translate-x-1/2 w-11/12 bg-slate-200 py-6 shadow-md rounded-lg 
                          transition-all duration-300 ease-in-out 
                          ${bMobileMenu ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'}
                          md:hidden`}>
            <li><a href="#services" className="hover:text-gateway-logo transition-colors duration-200" onClick={handleLinkClick}>About Us</a></li>
            <li><a href="#values" className="hover:text-gateway-logo transition-colors duration-200" onClick={handleLinkClick}>Products</a></li>
            <li><a href="#team" className="hover:text-gateway-logo transition-colors duration-200" onClick={handleLinkClick}>Blog</a></li>
            <li><a href="#contact" className="hover:text-gateway-logo transition-colors duration-200" onClick={handleLinkClick}>Contact Us</a></li>
          </ul>
      </nav>
    );
};

export default Navbar;