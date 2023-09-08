import React from "react";
import '../styles.css'
import New1 from '../img/new-1.png'
import { NewPostsPageData } from "../DUMMY_DATA";
import { AllTopics } from "../DUMMY_DATA";

import Subscribe from '../component/Subscribe.jsx'
import AddressPanel from "../component/AddressPanel";

import { SvgBulb } from "../DUMMY_DATA";

function NewPostsPage() {
    return(
        <div className="custom-container">
            <div className="bg-white px-8 py-4 rounded-lg shadow mb-2">
                <h1 className="text-3xl font-bold mb-8">New</h1>
                <p className="font-semibold">Our latest web design tips, tricks, insights, and resources, hot off <br /> the presses.</p>
            </div>
            <div className="panel"></div>
            
            {/* Address Panel  */}
            <AddressPanel lastChild="New"/>

            <div className="grid grid-cols-2 gap-4">
                {/* item  */}
                {NewPostsPageData.map((item)=>(
                    <div className="mb-4">
                        <img className="rounded-lg mb-4" src={New1} alt="" />
                        <p className="text-xs opacity-50 mb-4">{item.category}</p>
                        <h2 className="text-xl font-semibold hover:text-pink-600 mb-4">{item.title}</h2>
                        <p className="text-sm opacity-50 mb-4">{item.desc}</p>
                    </div>
                ))}
                
            </div>
            <div className="panel"></div>

            <div>Load More</div>
            <div className="panel"></div>

            {/* All Topics  */}
            <h1 className="text-3xl font-bold mb-8">All Topics</h1>
            <div className="grid grid-cols-4 gap-4">
                {AllTopics.map((item)=>(
                    <div className="p-4 bg-white rounded-lg flex items-center py-8 shadow">
                        <div className="mr-2 p-2">{item.iconName}</div>
                        <div className="font-semibold">{item.name}</div>
                    </div>
                ))}
            </div>
            <div className="panel"></div>

            {/* Subscribe  */}
            <Subscribe/>
            <div className="panel"></div>

        </div>
    )
}
export default NewPostsPage;