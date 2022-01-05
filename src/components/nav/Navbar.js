import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./Navbar.css"

export const NavBar = () => {
    const history = useHistory()
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/myentrys">Journal Entrys</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/futureadd">AddFeature</Link>
            </li>
            <li className="navbar__item">
                Navigation link
            </li>
            {
                (localStorage.getItem("journal_user_id") !== null) ?
                <li className="navbar__item">
                    <button className="nav-link fakeLink"
                        onClick={() => {
                            localStorage.removeItem("journal_user_id")
                            history.push({ pathname: "/" })
                        }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}
