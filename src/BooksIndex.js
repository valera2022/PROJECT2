import React,{useState} from "react";
import { useEffect } from "react";
import Book from "./Book";

function BooksIndex(){
    const [books,setBooks] =  useState([])

    useEffect(()=>{
        fetch("http://localhost:8000/books")
        .then(r=> r.json())
        .then(data=>{ setBooks(data)})
    },[])

    let booksList = books.map((book)=>{ return <Book bookName={book.name}/>
      
    })
    return(
        <div>
            {booksList}
           

        </div>
    )
}

export default BooksIndex