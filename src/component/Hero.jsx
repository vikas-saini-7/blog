import React from "react";
import '../styles.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Hero from '../img/hero.png'
import { NewPosts } from "../DUMMY_DATA";
import { Link } from "react-router-dom";

function Header() {
    return(
        <div className="custom-container flex gap-4">
            <div className="grow mr-4">
                <img className="rounded-lg" src={Hero} alt="" />
            </div>
            <div className="flex-none w-64">
                <ul>
                    <div className="flex py-4 border-b">
                        <div className="flex-1 font-bold">New</div>
                        <Link to="new"><div className="text-xs opacity-60 hover:text-pink-600 hover:opacity-100">View all new</div></Link>
                    </div>
                    {/* items  */}
                    {NewPosts.map((item)=>(
                        <li className="py-3">
                        <div className="text-xs opacity-60">{item.time}</div>
                        <Link to='blog-page'><div className="font-semibold hover:text-pink-600">{item.title}</div></Link>
                    </li>
                    ))}
                </ul>
                
            </div>
        </div>
    )
}
export default Header;