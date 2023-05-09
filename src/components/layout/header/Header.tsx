import React from "react"
import { NavLink, Link } from "react-router-dom"
import { FaSearch, FaUser } from "react-icons/fa"
import { ReactComponent as Logo } from "../../assets/logo.svg"
import "./header.css"

const Header = () => {
  const handleSearch = () => {
    // Логика отправки запроса поиска
  }

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <Logo />
      </Link>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink to="/" end className="header__nav-link">
              Главная
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/friends" className="header__nav-link">
              Друзья
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/messages" className="header__nav-link">
              Сообщения
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="header__search">
        <input type="text" placeholder="Поиск" />
        <button className="header__search-button" onClick={handleSearch}>
          <a>
            <FaSearch className="header__search-icon" />
          </a>
        </button>
      </div>
      <NavLink to="/profile" className="header__profile">
        <FaUser />
      </NavLink>
    </header>
  )
}

export default Header
