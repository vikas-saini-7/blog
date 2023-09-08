import React from "react";
import '../styles.css'
import { Link } from "react-router-dom";

function AddressPanel(props) {
    return(
        <div className="address-panel mb-4 text-sm">
            <Link to='/'><span className="hover:text-pink-600">Home </span></Link> {props.secondLastChild && <span>&mdash; {props.secondLastChild}</span>}  <span>&mdash; {props.lastChild}</span>
        </div>
    )
}
export default AddressPanel;