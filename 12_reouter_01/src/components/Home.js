import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        (async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(res.data.slice(0,5))
        })()
        
    }, [])

    const listMarkup = posts.length>0 ? (
        posts.map(post => (
            <div className="card shadow p-3 mb-5 bg-white rounded" key={post.id}>
                <div className="card-body">
                    <Link to={`/${[post.id]}`}><h5 className="card-title">{post.title}</h5></Link>
                    <p className="card-text">{post.body}</p>
                </div>
            </div>
        ))
    ):(<div className="text-center">No posts found</div>)
    return (
        <div className="container">
            <h4 className="center">Home</h4>
            {listMarkup}
        </div>
    )
}

export default Home
