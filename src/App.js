import logo from './logo.svg';
import './App.css';
import React from 'react';
import  ReactDOM  from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import BooksIndex from './BooksIndex';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path="/home" component={Home}/>
      <Route exact path="/books" component={BooksIndex}/>
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
