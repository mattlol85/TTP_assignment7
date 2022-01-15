import './App.css';
import Footer from './Footer'
import Navbar from './Navbar';
import SearchField from './SearchField';
import { useState } from "react";
import { My_Api_key } from "./config"
import GifCard from "./GifCard.js"

function App() {
    const [searchInput, setSearchInput] = useState(null)

    const [gifs, setGifs] = useState(null)

    async function getRandom() {
        await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${My_Api_key.key}`)
            .then(res => res.json()).then(obj => setGifs(obj))

    }

    async function getSearched() {
        await fetch(`http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=${My_Api_key.key}`)
            .then(res => res.json()).then(obj => setGifs(obj))

    }

    async function getTrending() {
        await fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${My_Api_key.key}`)
            .then(res => res.json()).then(obj => setGifs(obj))

    }


    const getInput = (data) => {
        setSearchInput(data)
    }

    console.log(gifs)
    if (gifs) {
        return (
            <div>
                <Navbar />
                <br/>
                <SearchField inputFunc={getInput} />

                <div className="buttonDiv">
                    <button className='btn' onClick={getSearched}>Search</button>
                    <button className='btn' onClick={getRandom}>Random</button>
                    <button className='btn' onClick={getTrending}>Trending</button>
                </div>
                <GifCard gif={gifs} />
                <Footer />
            </div>
        );
    }
    return (
        <div>
            <Navbar />
            <br/>
            <SearchField inputFunc={getInput} />
            <div className="buttonDiv">
                <button className='btn' onClick={getSearched}>Search</button>
                <button className='btn' onClick={getRandom}>Random</button>
                <button className='btn' onClick={getTrending}>Trending</button>
            </div>
            <Footer />
        </div>
    )
}

export default App;
