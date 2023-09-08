import React from "react";
import '../styles.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";


function AddressPanel(props) {
    return(
        <div className="actions flex-none w-24 rounded-lg shadow">
            <div className="text-center mb-4 mt-8">
                <FontAwesomeIcon className="hover:text-pink-600" icon={faHeart} size="2x" />
                <p>{props.likes}</p>
            </div>
            <div className="text-center mb-8">
                <FontAwesomeIcon icon={faEye} size="2x" />
                <p>{props.seen}</p>
            </div>
        </div> 
    )
}
export default AddressPanel;