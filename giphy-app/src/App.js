import './App.css';
import Footer from './Footer'
import Navbar from './Navbar';
import SearchField from './SearchField';
import {useState} from "react";
import {My_Api_key} from "./config"

function App() {
  const [searchInput, setSearchInput] = useState(null)

  const [gifs, setGifs] = useState(null)
  const getInput = (data) =>{
    setSearchInput(data)
  }


  console.log(searchInput)
  return (
    <div>
    <Navbar />
    <SearchField inputFunc={getInput}/>
    <Footer />
    </div>
  );
}

export default App;
