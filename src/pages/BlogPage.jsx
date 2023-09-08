import React from "react";
import '../styles.css'
import AddressPanel from '../component/AddressPanel.jsx'
import PostActions from '../component/PostActions.jsx'
import BlogPostImage1 from '../img/blog-post-1.png'
import { PostContent } from "../DUMMY_DATA";
import ExtraPosts from "../component/ExtraPosts";
import Comments from "../component/Comments.jsx";


function BlogPage() {
    const PostData = 
    {
        id:1,
        title: '10 Reasons to Build Your Website with WP Page Builder',
        desc:'People’s quest for creating websites has easily taken us to a new era of site development. Where, with the availability of robust page building tools, creating websites has become a lot more fun (especially for non-developers).',
        author: 'TOMAS LAURINAVICIUS',
        categoory:'DESIGN PROCESS',
        coverImage:'img',
        content:PostContent,
        likes:'12k',
        seen:'25k',
    }
    return(
        <>
            <div className="custom-container" id="blog-post">
                {/* blog Header starts  */}
                <div className="blog-header mb-8">
                    <h1 className="mb-8 text-5xl font-bold">{PostData.title}</h1>
                    <p className="mb-8 font-semibold">{PostData.desc}</p>
                    <p className="text-xs text-pink-600"><span className="opacity-50 text-black">BY </span> {PostData.author} <span className="opacity-50 text-black">IN</span> {PostData.categoory} </p>
                </div>

                {/* address panel  */}
                <AddressPanel secondLastChild="Blog Post" lastChild={PostData.title}/>

                {/* blog body starts  */}
                <div className="flex gap-4">
                    <div className="blog-body flex-1">
                        <img className="blog-cover-image rounded-xl mb-8" src={BlogPostImage1} alt="" />
                        <div className="blog-content" id="blog-content">
                            {PostData.content}
                        </div>
                    </div>
                    <PostActions likes={PostData.likes} seen={PostData.seen} />
                </div>
                <div className="panel"></div>
                {/* blog body ENDS  */}
                <div className="text-4xl mb-8 font-semibold">You may also like...</div>
                <ExtraPosts/>
                <div className="panel"></div>


            </div>
            <Comments/>
        </>
    )
}
export default BlogPage;