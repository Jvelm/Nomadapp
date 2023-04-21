import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link legacyBehavior href="/">
          <a>
            <span>Nomadapp</span>
          </a>
        </Link >
      </div>

      <div className="navbar__menu" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>

      <div className={`navbar__Link legacyBehaviors ${isMenuOpen ? "active" : ""}`}>
        <Link legacyBehavior href="/about">
          <a onClick={closeMenu}>
            <span>About</span>
          </a>
        </Link >
        <Link legacyBehavior href="/login">
          <a onClick={closeMenu}>
            <span>Login</span>
          </a>
        </Link >

        {isLoggedIn && (
          <>
            <Link legacyBehavior href="/dashboard">
              <a onClick={closeMenu}>
                <span>Dashboard</span>
              </a>
            </Link >
            <div className="navbar__user">
              <FontAwesomeIcon icon={faUser} />
              <div className="navbar__dropdown">
                <Link legacyBehavior href="/account-settings">
                  <a onClick={closeMenu}>
                    <span>Account Settings</span>
                  </a>
                </Link >
                <Link legacyBehavior href="/favorites">
                  <a onClick={closeMenu}>
                    <span>Favorites</span>
                  </a>
                </Link >
                <Link legacyBehavior href="/likes">
                  <a onClick={closeMenu}>
                    <span>Likes</span>
                  </a>
                </Link >
                <Link legacyBehavior href="/logout">
                  <a onClick={closeMenu}>
                    <span>Log Out</span>
                  </a>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
