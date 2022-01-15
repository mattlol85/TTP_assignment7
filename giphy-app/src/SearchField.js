import './SearchField.css'
import {useEffect, useState} from "react";


export default function SearchField(props){
    const [search, setSearch] = useState("")
    useEffect(() =>{
        props.inputFunc(search)
    })

    return (
        <div>
            <div id="searchBar">
            <input type={"text"} onInput={(ev) => setSearch(ev.target.value)} placeholder='Search for GIF' id='the-bar-itself'/>
            </div>
        </div>
    )

}