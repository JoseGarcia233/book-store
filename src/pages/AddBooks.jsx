import React,{useState} from 'react'
import'../css/addBooks.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const api ='https://localhost:44394/api/authors';
const apibook ='https://localhost:44394/Api/Books';
const apibookPict ='https://localhost:44394/Api/Pictues';


export default function AddBooks() {
  let nav = useNavigate();
  const [authotname, setAuthotname] = useState('');
  const [authorlas, setAuthorlas] = useState('');
  const [title, setTitle] = useState('');
  const[publiserDATA, setPubliserDATA] = useState('');
  const[pages, setPages] = useState();
  const[authorId, setAuthorId] = useState(1);
  const[bookId, setBookId] = useState(1);
  const [urlPicture, setUrlPicture] = useState('');

 var count =bookId
 console.log('klk count', count);

  const handlesumit = async (e) => {
    e.preventDefault();
    
    try{
      const responses = await axios.post(api, {
        name:authotname,
        lastName: authorlas,
        idBook : bookId
      })
      .then(function (res) {
        
        axios.post(apibook,
            {
                title: title,
                publiserDATA: publiserDATA,
                pages: pages,
                authorId: authorId,

            }).then(function (res) { 
                console.log(res);
                axios.post(apibookPict,
                    {
                        urlPicture: urlPicture,
                        bookId: bookId,
                    });
                    setBookId(count + 1);
                    nav('/Books');
                    setAuthorId(authorId + 1);
             })
             console.log(res);
        console.log(responses);
            
            
      })
    }catch(err){
      alert(err.res);
    }
  };


  const setData = (authotname, authorlas, title,publiserDATA,pages,urlPicture) => {
    localStorage.setItem('Authotname', authotname)
    localStorage.setItem('Authorlas', authorlas)
    localStorage.setItem('Title', title)
    localStorage.setItem('PubliserDATA', publiserDATA)
    localStorage.setItem('Pages', pages)
    localStorage.setItem('UrlPicture', urlPicture)
    
}
  return (
    <div className='container-form'>
    <h1>Add Books</h1>
      <form onSubmit={handlesumit}>
        <input onChange={(e)=>setAuthotname(e.target.value)} id='athor' value={authotname} placeholder='Write the Author Name' type="text" required />
          <br/>
        <input onChange={(e)=>setAuthorlas(e.target.value)} id='authorlas'value={authorlas} placeholder='Write the  Author LastName'type="text" required />
          <br/>
        <input onChange={(e)=>setTitle(e.target.value)}  id='title' value={title} placeholder='Whrite the Title' type="text" required />
          <br/>
          <input onChange={(e)=>setPubliserDATA(e.target.value)}  id='publiserDATA' value={publiserDATA} placeholder='Write the Book Date yy-mm-dd' type="text" required />
          <br/>
          <input onChange={(e)=>setUrlPicture(e.target.value)}  id='urlPicture' value={urlPicture} placeholder='Put the Url image here' type="text" required />
          <br/>
          <input onChange={(e)=>setPages(e.target.value)}  id='pages' value={pages} placeholder='Put the number of page' type="text" required />
          <br/>
        <button type="submit"  onClick={() => setData(authotname,authorlas, title,publiserDATA,urlPicture)} className="btn btn-outline-secondary">Save</button>
      </form>
  </div>
  )
}
