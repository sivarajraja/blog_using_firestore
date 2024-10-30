import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/home/Home';
import Navbar from './components/navbar/Navbar';
import CreatePost from './screens/create/CreatePost';
import PostDetail from './screens/postdetails/PostDetails'
import EditPost from "./screens/edit/EditPost";
import { Toaster } from 'react-hot-toast';
import Login from './screens/login/Login';
import Signup from './screens/signup/Signup';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const {user} = useAuthContext()
  return (
    <div className="App-container">
      <BrowserRouter>
      <Toaster/>
      <Navbar/>
      <div className='container'>
      <Routes>
        {user!==null ? (<><Route path='/' element={<Home/>}/>
        <Route path='/create' element={<CreatePost/>}/>
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/edit/:id" element={<EditPost/>}/> </>) : 
        (<><Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/> </>)}
        
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
