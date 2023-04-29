import React from "react";
import { Link } from "react-router-dom";

function Book({book}){
    return(
      <Link to={`/books/${book.id}`}>
       
        <li >{book.name}</li>
       
      </Link>

    )
}


export default Book