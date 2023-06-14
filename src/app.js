import React, { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './Search.svg';
import MovieCard from './MovieCard';
import Footer from './Footer';

const URL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}`;

function App() {
    const [movies, setMovies] = useState([]);
    const [searchKeyWord, setSearchKeyWord] = useState('');

    useEffect(() => {
        searchMovies('avengers');
    }, []);
    
    const searchMovies = async (title) => {
        const response = await fetch(`${URL}&s=${title}`);
        const data = await response.json();
        console.log(data);
        const movieArray = data.Search;
        console.log(movieArray);
        setMovies(movieArray);
    }

    const searchOnEnter = (e) =>{
        if (e.key === 'Enter') {
            searchMovies(searchKeyWord);
        }
    }


    return (
        <>
        <div className='app'>
            <h1>FlixDB - The Movie Database</h1>
            <div className='search'>
                <input type='text' placeholder='Search for movies here' value={searchKeyWord} onChange={(e) => setSearchKeyWord(e.target.value)} onKeyDown={searchOnEnter} />
                <img src={searchIcon} alt='searchIcon' onClick={() => searchMovies(searchKeyWord)} />
            </div>

            {movies?.length > 0 ? (
                <div className='container'>
                    {movies.map((movie) => ( <MovieCard movie={movie}/> ))}
                </div>
            ) : (
                <div className='empty'>
                    <h2>No matching movies found</h2>
                </div>
            )}
        </div>
        <div className='app fixed'>
            <Footer/>
        </div>
        </>
    );
}

export default App;
