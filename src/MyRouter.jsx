import React from "react";
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link,Redirect
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";

import PopularPostsPage from "./pages/PopularPostsPage.jsx";
import NewPostsPage from "./pages/NewPostsPage.jsx";
import TopicsPage from "./pages/TopicsPage.jsx";
import ReadingListPage from "./pages/ReadingListPage.jsx";



function MyRouter() {
    return(
        <>
                <Routes>
                    <Route path="/" exact element={<HomePage/>} />
                    <Route path="/blog-page" element={<BlogPage/>} />

                    <Route path="/popular" element={<PopularPostsPage/>} />
                    <Route path="/new" element={<NewPostsPage/>} />
                    <Route path="/topic" element={<TopicsPage/>} />
                    <Route path="/reading-list" element={<ReadingListPage/>} />

                </Routes>
        </>
    )
}
export default MyRouter;