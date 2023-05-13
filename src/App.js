import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import  ReactDOM  from 'react';
import { BrowserRouter, Route, Switch, useHistory, useRouteMatch} from 'react-router-dom';
import Home from './Home';
import BooksList from './BooksList';
import NavBar from './NavBar';
import BookShow from './BookShow';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddBook from './AddBook';
import { toast } from "react-toastify";




function App() {
  const [books,setBooks] =  useState([])
  const history = useHistory()
  console.log(history)
  // const match = useRouteMatch();


  useEffect(()=>{
    fetch("http://localhost:8000/books")
    .then(r=> r.json())
    .then(data=>{ setBooks(data)})
},[])

console.log(books)
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
    }) //why is not pushing to booklist
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
      <Route  path="/books/:id"> <BookShow books={books}/> </Route>

      </Switch>
               
            
      <ToastContainer/>
    </div>
   
    </BrowserRouter>
  );
}

export default App;
