import React from "react";
import '../styles.css'
import AddressPanel from "../component/AddressPanel";
import ReadingListImage1 from '../img/reading-list-1.png'
import { AllReadingLists } from "../DUMMY_DATA";

function ReadingListPage() {
    return(
        <div className="custom-container">
        <h1 className="text-3xl font-bold mb-8">All Reading lists</h1>
        <p className="font-semibold">Get in-depth insights on web design, freelancing, content management, and <br /> more with these series of related reads.</p>
        <div className="panel"></div>
        
        {/* Address Panel  */}
        <AddressPanel lastChild="Reading lists"/>
        <div className="grid grid-cols-2 gap-8">
            {AllReadingLists.map((item)=>(
                <div className="flex">
                    <img className="w-48 h-64 object-cover mr-4 flex-1 rounded-lg" src={ReadingListImage1} alt="" />
                    <div className="flex-1 ml-4">
                        <h2 className="mb-4 font-semibold text-xl">{item.name}</h2>
                        <p>{item.desc}</p>
                    </div>
                </div>
            ))}
            
        </div>

        </div>
    )
}
export default ReadingListPage;