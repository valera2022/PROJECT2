import React,{useState} from "react";
import { useEffect } from "react";
import Book from "./Book";
import AddBook from "./AddBook";
import { Link,Route } from "react-router-dom";
function BooksList({books}){
   

   

    let booksList = books.map((book)=>{ return <Book book={book}/>
      
    })
    
    return(
        <div>
         <div className="booksHeader">
            <h1 className="headersText">Here Are Your Books</h1>
         </div>
           <ul className="ulist"> {booksList}</ul>

         <Link to="/form">
            <button >Add a book</button>
         </Link>
            
           

        </div>
    )
}

export default BooksList