import React, {useEffect, useState} from "react";



export default function GifCard(props) {
    const [gifprop, setGifProp] = useState(props.gif)

    useEffect(()=>{
        setGifProp(props.gif)
    })
    return (

        <div>
            {Array.isArray(gifprop.data) ? gifprop.data.map(elm => <img src={elm.images.original.url}/>) :
                <img src={gifprop.data.images.original.url}/>}
        </div>
    )
}
