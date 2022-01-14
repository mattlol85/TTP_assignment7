import './App.css';
import Footer from './Footer'
import Navbar from './Navbar';
import SearchField from './SearchField';
import {useCallback, useEffect, useState} from "react";
import {My_Api_key} from "./config"
import GifCard from "./GifCard.js"

function App() {
    const [searchInput, setSearchInput] = useState(null)

    const [gifs, setGifs] = useState(null)

    async function getRandom() {
        return await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${My_Api_key.key}`)
            .then(res => res.json()).then(obj => setGifs(obj))
        
    }

    async function getSearched() {
        return await fetch(`http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=${My_Api_key.key}`)
            .then(res => res.json()).then(obj => setGifs(obj))

    }

    async function getTrending(){
        return await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${My_Api_key.key}`)
            .then(res => res.json()).then(obj => setGifs(obj))

    }


    const getInput = (data) => {
        setSearchInput(data)
    }
    if (gifs) {
        return (
            <div>
                <Navbar/>
                <SearchField inputFunc={getInput}/>
                <button onClick={getSearched}>Search</button>
                <button onClick={getRandom}>Random</button>
                <button onClick={getTrending}>Trending</button>
                <GifCard gif={gifs}/>
                <Footer/>
            </div>
        );
    }
    return(
        <div>
            <Navbar/>
            <SearchField inputFunc={getInput}/>
            <button onClick={getSearched}>Search</button>
            <button onClick={getRandom}>Random</button>
            <button onClick={getTrending}>Trending</button>
            <Footer/>
        </div>
    )
}

export default App;
