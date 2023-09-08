import React from "react";
import '../styles.css'
import EssentialImage from '../img/essential-image.png'
import { EssentialPostsData } from "../DUMMY_DATA";
import { Link } from "react-router-dom";

function EssentialPosts() {
    return(
        <div className="custom-container flex">
            <div className="flex-1">
                <div class="grid gap-4 grid-cols-2 grid-rows-2 h-full">
                    {EssentialPostsData.map((item)=>(
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <div className="mb-2 uppercase text-xs mt-2 opacity-60">{item.category}</div>
                            <Link to="/blog-page"><div className="font-semibold hover:text-pink-600">{item.title}</div></Link>
                        </div>
                    ))}
                </div>
            </div>
                <div className="flex-1 ml-4 " >
                    <img className="rounded-xl" src={EssentialImage} alt="" />
                </div>
        </div>
    )
}
export default EssentialPosts;