import {HomePage} from "../pages/Home.jsx";
import {AboutPage} from "../pages/About.jsx";
import {PostsPage} from "../pages/Posts.jsx";

export const router = [
    {
        path:'/home',
        element:<HomePage/>
    },
    {
        path: '/',
        element: <AboutPage/>
    },
    {
        path: '/posts',
        element: <PostsPage/>
    }
]