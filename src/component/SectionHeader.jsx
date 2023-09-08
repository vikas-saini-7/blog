import React from "react";
import '../styles.css'
import { Link } from "react-router-dom";

function SectionHeader(props) {
    return(
        <div className="custom-container flex justify-between">
            <h2 className="font-bold text-2xl">{props.header}</h2>
            <Link to={props.path}><div className="text-sm opacity-50 hover:text-pink-600 hover:opacity-100">View all</div></Link>
        </div>
    )
}
export default SectionHeader;