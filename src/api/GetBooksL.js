import {useState, useEffect} from 'react';
import axios from 'axios';

const  GetBooksL = () =>   {
    const [bookdata, setBookdata] = useState([]);
    const [err, setErr] = useState([]);
  

  useEffect(() => {
    // get request using axios inside useEffect React hook
    const getCellPhones = () =>{
        axios.get('https://localhost:44394/Api/Books/ListBooks')
        .then((response)=> 
        setBookdata(response.data))
        .catch((error )=> setErr(error))
      
    }
    getCellPhones()
  }, []);
  return[bookdata, err]
  
};

export default  GetBooksL;

