import './App.css';
import Footer from './Footer'
import Navbar from './Navbar';
import SearchField from './SearchField';
import {useEffect, useState} from "react";
import {My_Api_key} from "./config"

function App() {
  const [searchInput, setSearchInput] = useState(null)

  const [gifs, setGifs] = useState(null)

  const [searchForGifs, setSearchForGifs] = useState(false)

  const randomUrl = `http://api.giphy.com/v1/gifs/random?api_key=${My_Api_key.key}`

  useEffect(() => {
      fetch(randomUrl).then(res => res.json()).then(obj => setGifs(obj))
    },[randomUrl])

  const getInput = (data) =>{
    setSearchInput(data)
  }
  if(gifs) {
    return (
        <div>
          <Navbar/>
          <SearchField inputFunc={getInput}/>
          <button>Search</button>
          <button>Random</button>
          <Footer/>
        </div>
    );
  }
  return(
      <h2>Nothing to see here</h2>
  )
}

export default App;
