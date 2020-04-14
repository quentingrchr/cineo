import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../search-bar/search-bar.component";
import { SessionContextConsumer } from "../../context/session.context";

export default function Header() {
  let location = useLocation();
  return (
    <SessionContextConsumer>
      {({ user, logOut }) => (
        <header className="header">
          <ul className="header__nav nav">
            <li>
              <Link to="/">
                Ciné<span>o</span>
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === "/" ? "active" : ""}
                to="/"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === "/series" ? "active" : ""}
                to="/series"
              >
                Séries
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === "/movies" ? "active" : ""}
                to="/movies"
              >
                Films
              </Link>
            </li>
            <li>
              {user !== null && (
                <Link
                  className={location.pathname === "/my-list" ? "active" : ""}
                  to="/my-list"
                >
                  Mes enregistrement
                </Link>
              )}
            </li>
          </ul>
          <div className="header__tools tools">
            <SearchBar />
            <div className="tool__acount acount">
              <svg viewBox="0 0 26 26">
                <path d="M13 0C5.85 0 0 5.85 0 13C0 20.15 5.85 26 13 26C20.15 26 26 20.15 26 13C26 5.85 20.15 0 13 0ZM13 3.9C15.21 3.9 16.9 5.59 16.9 7.8C16.9 10.01 15.21 11.7 13 11.7C10.79 11.7 9.1 10.01 9.1 7.8C9.1 5.59 10.79 3.9 13 3.9ZM13 22.36C9.75 22.36 6.89 20.6701 5.2 18.2C5.2 15.6 10.4 14.17 13 14.17C15.6 14.17 20.8 15.6 20.8 18.2C19.11 20.67 16.25 22.36 13 22.36Z" />
              </svg>
              {user === null ? (
                <Link to="/sign-in-up">
                  <p>Se connecter</p>
                </Link>
              ) : (
                <Link to="/profil">
                  <p>Mon Compte</p>
                </Link>
              )}
            </div>

            {user !== null && (
              <div className="tool__logout" onClick={() => logOut()}>
                <Link to="/sign-in-up">
                  <svg viewBox="0 0 27 26">
                    <path
                      d="M19.0455 5.78146L19.0457 5.78157L25.6112 12.2607C25.7986 12.4462 25.9033 12.696 25.9033 12.9584C25.9033 13.2208 25.7976 13.4718 25.6112 13.6562L19.0457 20.1354L19.0455 20.1355C18.8556 20.3235 18.607 20.4176 18.3578 20.4176C18.1051 20.4176 17.8524 20.3197 17.6602 20.1256C17.2809 19.7404 17.284 19.1202 17.67 18.7401L17.67 18.74L22.362 14.1095L22.5355 13.9384H22.2918H9.71885C9.17692 13.9384 8.739 13.5004 8.739 12.9585C8.739 12.4165 9.17691 11.9786 9.71885 11.9786H22.2918H22.5355L22.362 11.8074L17.67 7.17696L17.6699 7.17689C17.2839 6.7967 17.2799 6.17654 17.6601 5.79146C18.0405 5.4062 18.6617 5.40156 19.0455 5.78146ZM3.2396 23.8572H12.9585C13.5004 23.8572 13.9383 24.2952 13.9383 24.8371C13.9383 25.379 13.5004 25.8169 12.9585 25.8169H3.2396C1.50872 25.8169 0.1 24.4082 0.1 22.6773V3.23965C0.1 1.50877 1.50873 0.1 3.2396 0.1H12.9585C13.5004 0.1 13.9383 0.538005 13.9383 1.07995C13.9383 1.62189 13.5004 2.0598 12.9585 2.0598H3.2396C2.58833 2.0598 2.05975 2.58832 2.05975 3.23965V22.6774C2.05975 23.3287 2.58827 23.8572 3.2396 23.8572Z"
                      stroke="#E3E3E3"
                      strokeWidth="1px"
                    />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </header>
      )}
    </SessionContextConsumer>
  );
}
