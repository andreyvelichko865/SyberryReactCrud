import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./navbar.module.css";

const Navbar = () => {
    return (
        <nav className ={style.nav}>
            <div>
                <NavLink to="/Students">Students</NavLink>
            </div>
            <div>
                <NavLink to="/Activity">Actvivity</NavLink>
            </div>
            <div>
                <NavLink to="/Subjects">Subjects</NavLink>
            </div>
            <div>
                <NavLink to="/Groups">Groups</NavLink>
            </div>
            <div>
                <NavLink to="/UniversityDepartment">UniversityDepartment</NavLink>
            </div>
            <div>
                <NavLink to="/Rating">Rating</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;