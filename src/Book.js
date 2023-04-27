import React from "react";
import { Link } from "react-router-dom";

function Book({book}){
    return(
      <Link to={`/books/${book.id}`}>
        <ul>{book.name}</ul>
      </Link>

    )
}


export default Book