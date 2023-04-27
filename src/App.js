import logo from './logo.svg';
import './App.css';
import React from 'react';
import  ReactDOM  from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Home from './Home';
import BooksIndex from './BooksIndex';
import NavBar from './NavBar';
import BookShow from './BookShow';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/books" component={BooksIndex}/>
      <Route  path="/books/:ID" component={BookShow}/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
