import React ,{useState,useEffect}from "react";
import { useParams } from "react-router-dom";


function BookShow(props){
    // debugger;
    const [book,setBooks]= useState({})
    const {id,name,author,date,img} = book
    // const {params} = useParams()
      useEffect(()=>{
        fetch(`http://localhost:8000/books/${props.match.params.ID}`)
        .then(r=> r.json())
      .then(data=>setBooks(data))
      },[])

    //   let showBook = book.map((bo)=>{
    //     return ( <img src={bo.img}/>)
    //   })
    return(
        <div>
          <img src={img}/>
          <h1>{name}</h1>
          <h2>{"by " +  author}</h2>
          <p>{"Published on " + date}</p>

        </div>
    )
}

export default BookShow