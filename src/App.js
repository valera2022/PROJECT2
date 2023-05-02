import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import  ReactDOM  from 'react';
import { BrowserRouter,Route,Switch ,useHistory} from 'react-router-dom';
import Home from './Home';
import BooksList from './BooksList';
import NavBar from './NavBar';
import BookShow from './BookShow';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddBook from './AddBook';
import { toast } from "react-toastify";




function App(props) {
  const [books,setBooks] =  useState([])
  const history = useHistory()


  useEffect(()=>{
    fetch("http://localhost:8000/books")
    .then(r=> r.json())
    .then(data=>{ setBooks(data)})
},[])

function handleForm(formData){
  console.log(formData)
  







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
    setBooks([...books,dat])
    toast.success("You just added a book!");
    history.push('/books');                                  })
  .catch(r=> toast.error("Oops, something went wrong " + r.message))
}


  return (
    <BrowserRouter>
    
    <div className="App">
    
      <NavBar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/form"> <AddBook books={books} onForm={handleForm}/> </Route>
      <Route exact path="/books" ><BooksList books={books} />
      </Route>
      <Route  path="/books/:ID" > <BookShow books={books}/> </Route>

      </Switch>
               
            
      <ToastContainer/>
    </div>
   
    </BrowserRouter>
  );
}

export default App;
