import React ,{useState,useEffect}from "react";
import { useParams } from "react-router-dom";


function BookShow({books}){
    // debugger;
    const params =useParams()
    console.log(params)
    let book = books.find(boo => books.id === params.id)
    // const [book,setBooks]= useState({})
    // const {id,name,author,date,img} = book
    // // const {params} = useParams()
      // useEffect(()=>{
      //   fetch(`http://localhost:8000/books/${props.match.params.ID}`)
      //   .then(r=> r.json())
      // .then(data=>setBooks(data))
      // },[])
        //  books.find(books.id !== id ){
              
        //  }
    //   let showBook = book.map((bo)=>{
    //     return ( <img src={bo.img}/>)
    //   })
    return(
        <div>
          <img  width="799.99" height="1134"src={ book.img}/>
          <h1>{book.name}</h1>
          <h2>{"by " + book.author}</h2>
          <p>{"Published on " +  book.date}</p>

        </div>
    )
}

export default BookShow