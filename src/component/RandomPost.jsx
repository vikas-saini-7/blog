import React from "react";
import '../styles.css'
import RandomImage from '../img/random-image.png'
import { Link } from "react-router-dom";

function RandomPost() {
    return(
        <div className="custom-container flex ">
            <div className="flex-1 bg-white p-8 rounded-l-lg shadow-lg">
                <p className="text-xs mb-4"><span className="opacity-60"> BY </span > TOMAS LAURINAVICIUS <span className="opacity-60"> IN </span> TUTORIALS</p>
                <Link to="/blog-page"><p className="font-semibold text-3xl mb-4 hover:text-pink-600">Mind-Blowing Twitter Stats and Facts on Our Favorite Network (2018)</p></Link>
                <p className="opacity-60">User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.</p>
            </div>
            <div className="flex-1">
                <img className="rounded-r-lg shadow-lg" src={RandomImage} alt="" />
            </div>
        </div>
    )
}
export default RandomPost;