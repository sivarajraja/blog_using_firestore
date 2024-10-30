import React  from 'react'
import './Post.css';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import AppSubmitButton from '../../components/appsubmitbutton/Appsubmitbutton';
import { useFireStore } from '../../hooks/useFireStore';
import toast from 'react-hot-toast';

export default function Post({post}) {

  const navigate = useNavigate();

  const {deleteDocument,docError} = useFireStore("posts");

  const handleClick = ()=>{
    navigate(`/post/${post.id}`,{state:post})
  }
  const handleEdit = () => {
    navigate(`/edit/${post.id}`, { state:post });
  };

  const handleDelete = () => {
    toast.success('successfully deleted!',{position:"top-center"})
    deleteDocument(post.id)
  };

  return (
    <div className="card">
  <h5 className="card-header">{post.title}

        {/*buttons to edit and delete*/}

        <div className="float-end">
          <AppSubmitButton onClick={handleDelete} title="Delete" />
        </div>
        <div className="float-end">
          <AppSubmitButton onClick={handleEdit} title="Edit" />
        </div>
  </h5>

  <div className="card-body" onClick={handleClick}>
    <p className="card-text">{post.body}</p>
  {post.createdAt && <small><i>{moment(post.createdAt.toDate()).calendar()}</i></small>}
  </div>

    {
      docError && <div className="alert alert-danger" role="alert">
      {docError}
      </div>
    }

</div>
  )
}
