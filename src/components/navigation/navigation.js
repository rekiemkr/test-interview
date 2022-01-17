import React from 'react'
import "./navigation.css"
import SearchIcon from "../../assets/img/search.svg"

export default function navigation() {
    return (
        <nav className="nav" role="navigation">
            <div className="max-centered">
                <h1 className="nav__logo">{process.env.REACT_APP_WEBSITE_NAME}</h1>
                <button className="nav__hamburger icon-button" alt="Open Menu">
                    <svg width="25" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z" fill="#FFF" fillRule="nonzero" />
                    </svg>
                </button>
                <ul className="nav__links">
                    <li>
                        <a href="https://www.zemoga.com/" target="_blank" rel='noreferrer'>Past Trials</a>
                    </li>
                    <li>
                        <a href="https://www.zemoga.com/" target="_blank" rel='noreferrer'>How It Works</a>
                    </li>
                    <li>
                        <a href="https://www.zemoga.com/" target="_blank" rel='noreferrer'>Login / Sign Up</a>
                    </li>
                    <li>
                        <form>
                            <input className="nav__search-input" aria-label="search" type="text" />
                            <button className="nav__search icon-button" alt="Search" type="submit">
                                <img src={SearchIcon} alt="search" />
                            </button>
                        </form>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
