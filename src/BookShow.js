import React ,{useState,useEffect}from "react";
import { useParams } from "react-router-dom";


function BookShow({books}){
    // debugger;
    console.log(books)
    const params =useParams()
    console.log(params)
   let showBook= books.find(boo => boo.id === parseInt(params.id,10))

   console.log(showBook)
  

  if(showBook){
    return(
      <div>
      <img  width="799.99" height="1134"src={ showBook.img}/>
      <h1>{showBook.name}</h1>
      <h2>{"by " +  showBook.author}</h2>
      <p>{"Published on " +   showBook.date}</p>

    </div>
      
    )

  }
  else {
  
    return <h1>Loading...</h1>

  }




}


export default BookShow