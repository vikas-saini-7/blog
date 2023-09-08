import React from "react";
import '../styles.css'
import { PopularPostsPageData } from "../DUMMY_DATA";
import PopImage1 from "../img/pop-1.png"
import PopImage2 from "../img/pop-2.png"
import PopImage3 from "../img/pop-3.png"
import PopImage4 from "../img/pop-4.png"
import PopImage5 from "../img/pop-5.png"
import PopImage6 from "../img/pop-6.png"
import PopImage7 from "../img/pop-7.png"
import PopImage8 from "../img/pop-8.png"
import { Link } from "react-router-dom";
import AddressPanel from '../component/AddressPanel.jsx'

function PopularPostsPage() {
    return(
        <>
            <div className="custom-container">
                
                <div  className="bg-white px-8 py-4 rounded-lg shadow mb-2">
                    <h1 className="text-3xl font-bold mb-8">Reading Lists</h1>
                    <div className="flex">
                        <img className="h-48 w-40 mr-8 object-cover rounded-md" src={PopImage2} alt="" />
                        <div className="p-4 w-85">
                            <h2 className="text-2xl font-semibold mb-4">Popular</h2>
                            <p className="font-semibold">Check out the most-read and most-shared posts from the <br /> Vikas's blog.</p>
                        </div>
                    </div>
                </div>

                <div className="panel"></div>
                {/* Address Panel  */}
                <AddressPanel lastChild="Popular"/>
                {PopularPostsPageData.map((item)=>(
                    <div className="flex mb-8 gap-4 bg-white rounded-l-lg shadow-md">
                        <div className="flex-1 p-8">
                            <p className="mb-4 text-xl opacity-80">{item.rank}</p>
                            <Link to="/blog-page"><h2 className="mb-4 text-2xl font-semibold hover:text-pink-600">{item.title}</h2></Link>
                            <p className="opacity-50">{item.desc}</p>
                        </div>
                        <div className="flex-1">
                            <img className="rounded-r-lg" src={PopImage1} />
                        </div>
                    </div>
                ))}
            </div>
            
        </>
    )
}
export default PopularPostsPage;