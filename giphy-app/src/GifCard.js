import React, {useState} from "react";



export default function GifCard(props){
    const [gifprop, setGitProp] = useState(props.gif)


console.log(gifprop.data)
    return(

        <div>
            {Array.isArray(gifprop.data)? gifprop.data.map(elm => <img src={elm.images.original.url}/>) : <img src={gifprop.data.images.original.url}/> }
        </div>
    )

}