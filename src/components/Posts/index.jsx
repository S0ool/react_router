import {Post} from "./post.jsx";
import {useState} from "react";

export function Posts() {
    const [PostList, setPosts] = useState([
        {
            title: 'Title 1',
            description: 'description 1 description 1description 1description 1description 1description 1description 1description 1'
        },
        {
            title: 'Title 2',
            description: 'description 2'
        },
        {
            title: 'Title 3',
            description: 'description 3'
        }
    ])

    return (
        <div className='post_container'>
            <h1>POSTS</h1>
            <div className='posts'>
                {PostList.map(e => <Post post={e} key={e.id}/>)}
            </div>
        </div>
    )
}