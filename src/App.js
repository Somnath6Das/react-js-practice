import Home from './Home';
import Navbar from './Navbar';
// new version of react-router-dom package  Switch propertise is replace by Routes and syntex changes in jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar/>
        <div className="content">
         <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="/create" element={<Create/>}/>
         <Route exact path="/blogs/:id" element={<BlogDetails/>}/>
         <Route exact path="*" element={<NotFound/>}/>
         </Routes>
        </div>  
    </div>
    </Router>
  );
}

export default App;













