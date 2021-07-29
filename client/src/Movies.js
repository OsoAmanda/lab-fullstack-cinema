import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

function Movies(props) {

    let [movies, setMovies] = useState([])

    useEffect(async function(){
        let res = await axios.get(`http://localhost:27017/listOfMovies`)
        setMovies(res.data)
    })

    function ShowMovies(){
        return movies.map((eachMovie) => {
            return (
                <div>
                    <img src={eachMovie.image}/>
                    <h3>{eachMovie.title}</h3>
                    <Link to={`movie/${eachMovie._id}`}>See more</Link>
                </div>
            )
        })
    }

    return (
        <div>
            <h2>Ironhack Cinema</h2>
            <main>
                {ShowMovies()}
                Click on the movie to check the showtimes!
            </main>
        </div>
    );
}

export default Movies;