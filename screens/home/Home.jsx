import React, { useEffect, useState } from 'react'
import Post from '../../components/post/Post';
import './Home.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

const Home = () => {

  const [posts,setPosts] = useState(null);

  useEffect(()=>{
    (async()=>{
      const collectionsRef = collection(db,"posts");
    const snapShots = await getDocs(collectionsRef);
    let snapShotArr = [] 

    snapShots.forEach((docsData) => {
      snapShotArr.push({...docsData.data(),id:docsData.id});
      setPosts(snapShotArr);
    });
    })();
  },[]);

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