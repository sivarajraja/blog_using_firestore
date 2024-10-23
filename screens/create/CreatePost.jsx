import React from "react";
import "./CreatePost.css";
import { useState } from "react";
import Appsubmitbutton from "../../components/appsubmitbutton/Appsubmitbutton";
import { useNavigate } from "react-router-dom";
import { useFireStore } from "../../hooks/useFireStore";
import toast from 'react-hot-toast';

export default function Createpost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [validationError, setValidationError] = useState("");

  const navigate = useNavigate();

  const {addDocument,docError} = useFireStore("posts")

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title) {
      setValidationError("Title should not be empty");
      return
    }
    if (!content) {
      setValidationError("Content should not be empty");
      return
    }
    setValidationError("");

    addDocument({title,body:content,userId:1});
    toast.success('successfully created!',{position:"top-center"})
    navigate('/')
  };

  
  return (
    <div className="outercontainer">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <h6>Title:</h6>
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>
            <h6>Content:</h6>
          </label>
          <textarea
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        {validationError && (
          <div className="alert alert-danger" role="alert">
            {validationError}
          </div>
        )}

        {
          docError && (
            <div className="alert alert-danger" role="alert">
            {docError}
            </div>
          )
        }

        <div className="float-end">
          <Appsubmitbutton title="Create"/>
        </div>
      </form>
    </div>
  );
}
