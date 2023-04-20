import { useState } from "react";
import NextLink from "next/link";
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
        <NextLink href="/">
          <a>
            <span>Home</span>
          </a>
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
          <a onClick={closeMenu}>
            <span>About</span>
          </a>
        </NextLink>
        <NextLink href="/login">
          <a onClick={closeMenu}>
            <span>Login</span>
          </a>
        </NextLink>

        {isLoggedIn && (
          <>
            <NextLink href="/dashboard">
              <a onClick={closeMenu}>
                <span>Dashboard</span>
              </a>
            </NextLink>
            <div className="navbar__user">
              <FontAwesomeIcon icon={faUser} />
              <div className="navbar__dropdown">
                <NextLink href="/account-settings">
                  <a onClick={closeMenu}>
                    <span>Account Settings</span>
                  </a>
                </NextLink>
                <NextLink href="/favorites">
                  <a onClick={closeMenu}>
                    <span>Favorites</span>
                  </a>
                </NextLink>
                <NextLink href="/likes">
                  <a onClick={closeMenu}>
                    <span>Likes</span>
                  </a>
                </NextLink>
                <NextLink href="/logout">
                  <a onClick={closeMenu}>
                    <span>Log Out</span>
                  </a>
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
