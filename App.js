import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/home/Home';
import Navbar from './components/navbar/Navbar';
import CreatePost from './screens/create/CreatePost';
import PostDetail from './screens/postdetails/PostDetails'
import EditPost from "./screens/edit/EditPost";

function App() {
  return (
    <div className="App-container">
      <BrowserRouter>
      <Navbar/>
      <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<CreatePost/>}/>
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/edit/:id" element={<EditPost/>}/>
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
