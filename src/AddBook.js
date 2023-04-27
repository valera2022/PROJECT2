import React,{useState} from "react";
import { useHistory,Route } from "react-router-dom";
import { toast } from "react-toastify";


function AddBook(){
    const[books,setBooks]= useState([])
    const history = useHistory()


    function HandleSubmit(e){
        e.preventDefault()
       
        // console.log( e.target.name.value)
        let formData = {
            name: e.target.name.value,
            author: e.target.author.value,
            date: e.target.date.value,
            img: e.target.img.value
        }

         fetch("http://localhost:8000/books",{
              method: "POST",
              headers: 
              { "Content-Type": "application/json" },
              body: JSON.stringify(
                formData
              )
        
        
              
            })
            .then(r=> r.json())
            .then(dat=> { 
              setBooks(...books,dat)
              toast.success("You just added a book!")
              history.push('/books')                                  })
            .catch(r=> toast.error("Oops, Failed to add Book " + r.message))

    }
return(<div>
        
        <h1>Add A Book</h1>
        <form onSubmit={HandleSubmit}>
        <div>
            <input  type="text" name="name" placeholder="Title"  />
          </div>
          <div>
            <input required type="text" name="author" placeholder="Author" />
          </div>
          <div>
            <input required type="text" name="date" placeholder="Date" />
          </div>
          <div>
            <input required type="text" name="img" placeholder="Image" />
          </div>
          <input type="submit" value="Submit"  />
        </form>
        
     </div>
    )
}



export default AddBook