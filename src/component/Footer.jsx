import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa0 } from "@fortawesome/free-solid-svg-icons";
import { fa1 } from "@fortawesome/free-solid-svg-icons";
// import { fa0 } from "@fortawesome/free-solid-svg-icons";
// import { fa0 } from "@fortawesome/free-solid-svg-icons";
import '../styles.css'

function Footer() {
    return(
            <div className="custom-container flex justify-between">
                <div className="opacity-50">Logo</div>
                <div>
                    {/* <FontAwesomeIcon icon={fa0} /> */}
                    {/* <FontAwesomeIcon icon={fa1} /> */}
                    {/* <FontAwesomeIcon icon={fa0} />
                    <FontAwesomeIcon icon={fa0} />
                    <FontAwesomeIcon icon={fa0} /> */}
                </div>
                <div className="opacity-50 text-xs hover:text-pink-600 hover:opacity-100"> Stunly - Vikas Saini | 2023 </div>
            </div>
    )
}
export default Footer;