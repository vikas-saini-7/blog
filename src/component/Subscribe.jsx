import React from "react";
import '../styles.css'

function BlogPage() {
    return(
        <div className="custom-container flex flex-col items-center text-center">
            <h2 className="text-4xl font-semibold mb-4">Get free web design insights...</h2>
            <p className="mb-8 text-sm font-semibold">In your inbox, every other week. And unsubscribe in a click, if you want.</p>
            <div className="subscribe-input">
                <input className="py-3 px-8 w-64 shadow" placeholder="Your email" type="text" />
                <button className="px-8">Subscribe</button>
            </div>
        </div>
    )
}
export default BlogPage;