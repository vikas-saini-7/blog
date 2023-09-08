import React from "react";
import '../styles.css'
import AddressPanel from "../component/AddressPanel";
import { AllTopics } from "../DUMMY_DATA";

function TopicsPage() {
    return(
        <div className="custom-container">
            
            <h1 className="text-3xl font-bold mb-8">Topics</h1>
            <p className="font-semibold">Find everything from design inspiration to best practices, freelancing <br /> tips to tools.</p>
            <div className="panel"></div>
            
            {/* Address Panel  */}
            <AddressPanel lastChild="Topics"/>
            <div className="grid grid-cols-2 gap-4">
            {AllTopics.map((item)=>(
                <div className="bg-white p-8 rounded-lg shadow">
                    <div className="flex mb-8">
                        <div className="mr-4 font-semibold">{item.iconName}</div>
                        <h2 className="font-semibold text-xl">{item.name}</h2>
                    </div>
                    <p>{item.desc}</p>
                </div>
            ))}
            </div>
        </div>
    )
}
export default TopicsPage;