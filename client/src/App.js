import './App.css';
import { Switch, Route } from "react-router-dom";
import axios from 'axios'
import Home from './Home'
import Movies from './Movies';
import MovieDetails from './MovieDetails';



function App() {

  axios.get(`http://localhost:5000/Home`).then(res => console.log(res.data)) 

  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/" render={(props) => <Home />} />
        <Route exact path="/movies" render={(props) => <Movies /> } />
        <Route exact path="/movie/:dynamicId" render={(props) => <MovieDetails {...props} />} />
      </Switch> 
     
    </div>
  );
}

export default App;
