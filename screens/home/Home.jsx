import React from 'react'
import Post from '../../components/post/Post';
import './Home.css';
import { useFetch } from '../../hooks/useFetch';

const Home = () => {

  const {document:posts} = useFetch("posts")

  return (
    <div className='container'>
    {
      posts && posts.map((post)=>{
        return <Post post={post} key={post.id}/>
      })
    }
    </div>
  )
}

export default Home