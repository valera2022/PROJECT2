import React,{useState} from "react";
import { useHistory,Route } from "react-router-dom";
import { toast } from "react-toastify";


function AddBook({books,setBooks}){
    // const[books,setBooks]= useState([])
    const [name ,setName]= useState("")
    const [author,setAuthor]= useState("")
    const [date,setDate] = useState("")
    const [img,setImg] = useState("")
    const history = useHistory()
   

    function handleSubmit(e){
        e.preventDefault()
       
        // console.log( e.target.name.value)
        let formData = {
            name,
            author,
            date,
            img
        }

        

    }
    //make form a control from
return(<div>
        
        <h1>Add A Book</h1>
        <form onSubmit={handleSubmit}> 
        <div>
            <input  type="text" name="name" value={name} onChange={e=> setName(e.target.value)
             } placeholder="Title"  />
          </div>
          <div>
            <input required type="text" name="author" value={author} onChange={e=> setAuthor(e.target.value)} placeholder="Author" />
          </div>
          <div>
            <input required type="text" name="date" value={date} onChange={e=>setDate(e.target.value)} placeholder="Date" />
          </div>
          <div>
            <input required type="text" name="img" value={img} onChange={e=>setImg(e.target.value)} placeholder="Image" />
          </div>
          <input type="submit" value="Submit"  />
        </form>
        
     </div>
    )
}



export default AddBook