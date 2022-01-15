import React, { useEffect, useState } from "react";
import './GifCard.css'



export default function GifCard(props) {
    const [gifprop, setGifProp] = useState(props.gif)

    useEffect(() => {
        setGifProp(props.gif)
    })
    return (

        <div className="gif-card">
            {Array.isArray(gifprop.data) ? gifprop.data.map(elm => <img className="gif" src={elm.images.original.url} />) :
                <img src={gifprop.data.images.original.url} />}
        </div>
    )
}