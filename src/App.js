import logo from './logo.svg';
import './App.css';
import React from 'react';
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
  return (
    <BrowserRouter>
    
    <div className="App">
    
      <NavBar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/form" component={AddBook}/>
      <Route exact path="/books" component={BooksList}/>
      <Route  path="/books/:ID" component={BookShow}/>

      </Switch>
               
            
      <ToastContainer/>
    </div>
   
    </BrowserRouter>
  );
}

export default App;
