import { useState } from "react";
import NextLink from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';

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
        <NextLink href="/">
          <p>
            <span>Home</span>
          </p>
        </NextLink>
      </div>

      <div className="navbar__menu" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>

      <div className={`navbar__NextLinks ${isMenuOpen ? "active" : ""}`}>
        <NextLink href="/about">
          <p onClick={closeMenu}>
            <span>About</span>
          </p>
        </NextLink>
        <NextLink href="/login">
          <p onClick={closeMenu}>
            <span>Login</span>
          </p>
        </NextLink>

        {isLoggedIn && (
          <>
            <NextLink href="/dashboard">
              <p onClick={closeMenu}>
                <span>Dashboard</span>
              </p>
            </NextLink>
            <div className="navbar__user">
              <FontAwesomeIcon icon={faUser} />
              <div className="navbar__dropdown">
                <NextLink href="/account-settings">
                  <p onClick={closeMenu}>
                    <span>Account Settings</span>
                  </p>
                </NextLink>
                <NextLink href="/favorites">
                  <p onClick={closeMenu}>
                    <span>Favorites</span>
                  </p>
                </NextLink>
                <NextLink href="/likes">
                  <p onClick={closeMenu}>
                    <span>Likes</span>
                  </p>
                </NextLink>
                <NextLink href="/logout">
                  <p onClick={closeMenu}>
                    <span>Log Out</span>
                  </p>
                </NextLink>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
