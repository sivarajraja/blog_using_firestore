import React from 'react'
import './Post.css';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

export default function Post({post}) {
  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate(`/post/${post.id}`,{state:post})
  }
  return (
    <div className="card" onClick={handleClick}>
  <h5 className="card-header">{post.title}</h5>
  <div className="card-body">
    <p className="card-text">{post.body}</p>
    <small><i>{moment(post.createdAt.toDate()).calendar()}</i></small>
  </div>
</div>
  )
}
