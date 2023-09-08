import React from "react";
import '../styles.css'
import ExtraImage1 from '../img/Extra-image-1.png'
import ExtraImage2 from '../img/Extra-image-2.png'
import { Link } from "react-router-dom";

function ExtraPosts() {
    return(
        <div className=" flex gap-4">
            <div className="flex-1">
                <img className="mb-4 rounded-lg" src={ExtraImage1} alt="" />
                <p className="text-xs mb-6"><span className="opacity-60">BY</span> TOMAS LAURINAVICIUS <span className="opacity-60">IN</span> RESOURCE</p>
                <Link to="/blog-page"><h3 className="mb-4 text-2xl font-semibold hover:text-pink-600">Website Downtime: Applicable Tips on How to Prevent It</h3></Link>
                <p className="opacity-50 text-sm">User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.</p>
            </div>
            <div className="flex-1">
                <img className="mb-4 rounded-lg" src={ExtraImage2} alt="" />
                <p className="text-xs mb-6"><span className="opacity-60">BY</span> TOMAS LAURINAVICIUS <span className="opacity-60">IN</span> ANNOUNCEMENTS</p>
                <Link to="/blog-page"><h3 className="mb-4 text-2xl font-semibold hover:text-pink-600">How to Fix Error 404 Not Found on Your WordPress Site</h3></Link>
                <p className="opacity-50  text-sm">User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.</p>
            </div>
        </div>
    )
}
export default ExtraPosts;