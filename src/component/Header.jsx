import React from "react";
import '../styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function Header() {
    return(
        <header className="custom-container flex">
            <div className="flex flex-1 mr-4 list-none menu">
                <Link to='/'>
                    <li className="mx-1 px-4 py-1 font-medium ml-0 pl-0">Logo</li>
                </Link>
                <Link to="/popular">   
                    <li className="mx-1 px-4 py-1">Popular</li>
                </Link>
                <Link to="/new">   
                    <li className="mx-1 px-4 py-1 active">New</li>
                </Link>
                <Link to="/reading-list">   
                    <li className="mx-1 px-4 py-1">Reading list</li>
                </Link>
                <Link to="/topic">   
                    <li className="mx-1 px-4 py-1">Topics</li>
                </Link>
                <Link to="/subscribe">
                    <li className="mx-1 px-4 py-1">Subscribe</li>
                </Link>
            </div>
            <div className="flex-none mr-4">
                <FontAwesomeIcon className="mr-4" size="lg" icon={faSearch} />
            </div>
        </header>
    )
}
export default Header;