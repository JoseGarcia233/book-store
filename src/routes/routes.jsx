import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Books from '../pages/Books';
import Home from '../pages/Home';
import AddBooks from '../pages/AddBooks';

function Routess() {
  return (
    <>
         <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
           
            <Route path='/Books' element={<Books/>}/>
            <Route path='/AddBook' element={<AddBooks/>}/>
           
        </Routes>
      </Router>
    </>
  )
}

export default Routess