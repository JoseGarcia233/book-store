import React from 'react'
import Cards from '../components/Cards'
import GetBooksL from '../api/GetBooksL'


function Books() {
  const [bookdata] = GetBooksL();;
  // console.log('api externa',bookdata);
  // eslint-disable-next-line no-unused-vars

  
   
  return (
    <>
{
          bookdata.map((bookdt)=>{
           
            //  console.log('klk data map', bookdt.author.books[0].picture.urlPicture);
            //  console.log('klk data map', bookdt.author.books[0].id);
            //  console.log('klk data books', bookdt.author.name);

              const pict = bookdt.author.books[0].picture.urlPicture;
              const authorName =  bookdt.author.name;
              const bookId = bookdt.author.books[0].id;
              const picId = bookdt.author.books[0].picture.id;
              console.log('klk id',picId);
            

             
            return (
              <Cards
                 key={bookdt.id}
                img={pict}
                AuthorName={ authorName}
                Title={bookdt.title}
                Id={bookId}
                ImgId={picId}
              />
            )
          })
          }
     
    </>
  )
}

export default Books