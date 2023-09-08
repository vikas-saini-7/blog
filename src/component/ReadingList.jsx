import React from "react";
import '../styles.css'
import ReadingListImage1 from '../img/reading-list-1.png'
import { AllReadingLists } from "../DUMMY_DATA";

function ReadingList() {
    return(
        <div className="custom-container flex gap-4">
            {AllReadingLists.slice(0,5).map((item)=>(
                <div className="">
                    <img className="w-48 h-48 object-cover rounded-lg mb-4" src={ReadingListImage1} alt="" />
                    <h2 className="text-center font-semibold text-lg">{item.name}</h2>
                </div>
            ))}
        </div>
    )
}
export default ReadingList;