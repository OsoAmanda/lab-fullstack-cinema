import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
        <img src="https://user-images.githubusercontent.com/23629340/36986664-acd6af14-209a-11e8-816d-b62417239c53.png"/>
           <Link to='/Movies'>
               <button>Check the movies!</button>
           </Link> 
        </div>
    );
}

export default Home;