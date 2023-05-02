import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import  ReactDOM  from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from './Home';
import BooksList from './BooksList';
import NavBar from './NavBar';
import BookShow from './BookShow';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddBook from './AddBook';



function App() {
  const [books,setBooks] =  useState([])

  useEffect(()=>{
    fetch("http://localhost:8000/books")
    .then(r=> r.json())
    .then(data=>{ setBooks(data)})
},[])

function handleForm(data){
  
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
      <Route  path="/books/:ID" component={BookShow}/>

      </Switch>
               
            
      <ToastContainer/>
    </div>
   
    </BrowserRouter>
  );
}

export default App;
