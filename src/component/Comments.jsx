import React from "react";
import '../styles.css'
import ExtraImage1 from '../img/Extra-image-1.png'
import ExtraImage2 from '../img/Extra-image-2.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply, faHeart } from "@fortawesome/free-solid-svg-icons";
import { PostComments } from "../DUMMY_DATA";



function Comments() {
    return(
        <div className="custom-container">
            <h2 className="mb-8 text-2xl">Comments</h2>
            <div>
                {PostComments.map((item)=>(
                    <div className="">
                        <div className="flex mb-1">
                            <img className="w-6 mr-2 rounded-full" src="https://static-00.iconduck.com/assets.00/user-square-icon-256x256-w0pqfldx.png" alt="" />
                            <p className=" font-semibold">{item.name}</p>
                        </div>
                        <div  className="ml-8">
                            <p className="mb-2 text-gray-400">{item.data}</p>
                            <div className="flex gap-4">
                                <p className="flex items-center">
                                    <FontAwesomeIcon icon={faHeart} className="hover:text-red-600 py-2" color="grey" />
                                    <span className="text-xs ml-2">{item.likes}</span>
                                </p>
                                <FontAwesomeIcon icon={faReply} className="hover:text-blue-600 py-2" color="grey" />
                            </div>
                        </div>
                        {item.replies.map((item)=>(
                            <div className="ml-8 my-8">
                                <div className="flex mb-1">
                                    <img className="w-6 mr-2 rounded-full" src="https://static-00.iconduck.com/assets.00/user-square-icon-256x256-w0pqfldx.png" alt="" />
                                    <p className=" font-semibold">{item.name}</p>
                                </div>
                                <div  className="ml-8">
                                    <p className="mb-2 text-gray-400">{item.data}</p>
                                    <div className="flex gap-4">
                                        <p className="flex items-center">
                                            <FontAwesomeIcon icon={faHeart} className="hover:text-red-600 py-2" color="grey" />
                                            <span className="text-xs ml-2">{item.likes}</span>
                                        </p>
                                        <FontAwesomeIcon icon={faReply} className="hover:text-blue-600 py-2" color="grey" />
                                    </div>
                                </div>
                            </div>
                        ))}
                        <hr className="my-8" />
                    </div>
                ))}
                
            </div>
            <div className="panel"></div>
        </div>
    )
}
export default Comments;