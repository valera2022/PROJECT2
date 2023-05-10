import React ,{useState,useEffect}from "react";
import { useParams } from "react-router-dom";


function BookShow({books}){
    // debugger;
    console.log(books)
    const params =useParams()
    console.log(params)
   let showBook= books.find(boo => boo.id === parseInt(params.id,10))

   console.log(showBook)
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
          <img  width="799.99" height="1134"src={ showBook.img}/>
          <h1>{showBook.name}</h1>
          <h2>{"by " +  showBook.author}</h2>
          <p>{"Published on " +   showBook.date}</p>

        </div>
    )
}


export default BookShow