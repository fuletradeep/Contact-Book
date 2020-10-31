import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function navbar() {
    return (
        <nav className="navbar-extend sm-auto bg-primary fixed ">
            <div className="icon-group">
            <i className="fa fa-phone mr-4" ></i>
            <h3>Phone Book</h3>
            </div>
          

            <div className="btn">
                <Link to="/contacts/add">
                <button className="btn btn-warning mt-2">Create Contact</button>
                </Link>
            </div>
        </nav>
    )
}

export default navbar
