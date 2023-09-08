import React from "react";
import Hero from "../component/Hero.jsx"
import SectionHeader from "../component/SectionHeader.jsx"
import ReadingList from "../component/ReadingList.jsx"
import PopularPosts from "../component/PopularPosts.jsx"
import EssentialPosts from "../component/EssentialPosts.jsx"
import RandomPost from "../component/RandomPost.jsx"
import ExtraPosts from "../component/ExtraPosts.jsx"


function HomePage() {
    return(
        <>

            {/* HERO  */}
            <Hero/>
            <div className="panel"></div>

            {/* READING LIST */}
            <SectionHeader header={"Reading List"} path="reading-list" />
            <ReadingList/>
            <div className="panel"></div>

            {/* POPULAR  */}
            <SectionHeader header={"Popular"} path="popular" />
            <PopularPosts/>
            <div className="panel"></div>

            {/* RANDOM  */}
            <SectionHeader header={"Random"} path="popular"  />
            <RandomPost/>
            <div className="panel"></div>

            {/* ESSENTIAL  */}
            <SectionHeader header={"Essential"} path='topic' />
            <EssentialPosts/>
            <div className="panel"></div>

            
            {/* EXTRA POSTS */}
            <div className="custom-container">
                <ExtraPosts/>
            </div>
            <div className="panel"></div>
            
        </>
    )
}
export default HomePage;