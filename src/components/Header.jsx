import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../contexts/FavoritesContext";

const Header = () => {
  const { favorites } = useContext(FavoritesContext);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide navbar
        setShowNavbar(false);
      } else {
        // scrolling up → show navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-danger px-3 fixed-top ${
        showNavbar ? "navbar-visible" : "navbar-hidden"
      }`}
    >
      <Link className="navbar-brand fw-bold" to="/">🍲 Filipino Cookbook</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favorites">
              Favorites ({favorites.length})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;