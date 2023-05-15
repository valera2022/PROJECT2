import React,{useState} from "react";
import { useHistory,Route } from "react-router-dom";



function AddBook({onApp}){
  const history = useHistory()
    
    const [name ,setName]= useState("")
    const [author,setAuthor]= useState("")
    const [date,setDate] = useState("")
    const [img,setImg] = useState("")
    
   const test = useState()
   console.log(test)

    function handleSubmit(e){
        e.preventDefault()
       
       
        const formData = {
            name:name,
            author:author,
            date:date,
            img:img
        }

        onApp(formData) 
       history.push("/books")


    }
   
return(
  <div>
        
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