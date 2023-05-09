import React,{useState} from "react";
import { useHistory,Route } from "react-router-dom";



function AddBook({books,onForm}){
    // const[books,setBooks]= useState([])
    const [name ,setName]= useState("")
    const [author,setAuthor]= useState("")
    const [date,setDate] = useState("")
    const [img,setImg] = useState("")
    // 
   

    function handleSubmit(e){
        e.preventDefault()
       
        // console.log( e.target.name.value)
        let formData = {
            name:name,
            author:author,
            date:date,
            img:img
        }

        onForm(formData)



        

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