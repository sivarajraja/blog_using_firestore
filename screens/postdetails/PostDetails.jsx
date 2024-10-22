import React from 'react'
import './PostDetails.css';
import { useLocation,useNavigate } from 'react-router-dom';
import AppSubmitButton from '../../components/appsubmitbutton/Appsubmitbutton';

export default function PostDetails() {

  const location = useLocation();
  const {state:post} = location;

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${post.id}`, { state: post });
  };

  const handleDelete = () => {
  };

  return (
    <div className="container outer">
      <div className="jumbotron">
        <h1 className="display-4">{post.title}</h1>
        <p className="lead">{post.body}</p>
        
        <div className="float-end">
          <AppSubmitButton onClick={handleDelete} title="Delete" />
          <div className="float-end"></div>
          <AppSubmitButton onClick={handleEdit} title="Edit" />
        </div>
      </div>
    </div>
  );
}
