import React ,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// data movie
import {MovieData} from './MovieData';
// add movie 
import AddMovie from './Components/AddMovie';
// movie list
import MovieList from './Components/MovieList';
//filter movie
import Filter from './Components/Filter';

import { Navbar,Form} from 'react-bootstrap';




const  App =() =>{
  const[movies,setMovies] =useState(MovieData);

  const [search,setSearch] =useState("");
  // Add function movie 
  const Add =(newMovie) => {
    setMovies([...movies,newMovie])
  };
  
  return (
    <div className="App">

        <Navbar bg="white" expand="lg" className="py-3" >
            <h3>Movie-app</h3>
            
              
              <Form inline >
                
                <Filter setSearch={setSearch}/>
                <AddMovie Add={Add}/>
                
              </Form>
           
          </Navbar>
         
        <MovieList movies ={movies} search={search} /> 
      
    
      
    </div>
  );
}

export default App;
