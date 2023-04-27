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
            <div id="booksHeader">
            <h1>Here Are Your Books</h1>
            </div>
           <ul> {booksList}</ul>

            <Link to="/form"><button >Add a book</button></Link>
            
           

        </div>
    )
}

export default BooksList