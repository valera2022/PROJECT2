import React,{useState} from "react";
import { useEffect } from "react";
import Book from "./Book";
import AddBook from "./AddBook";
import { Link,Route } from "react-router-dom";
function BooksList(){
    const [books,setBooks] =  useState([])

    useEffect(()=>{
        fetch("http://localhost:8000/books")
        .then(r=> r.json())
        .then(data=>{ setBooks(data)})
    },[])

    let booksList = books.map((book)=>{ return <Book book={book}/>
      
    })
    
    return(
        <div>
            <div className="booksHeader">
            <h1 className="headersText">Here Are Your Books</h1>
            </div>
           <ul className="ulist"> {booksList}</ul>

            <Link to={{
                pathname:"/form",
                state:books,
                setState:setBooks
            }}><button >Add a book</button></Link>
            
           

        </div>
    )
}

export default BooksList