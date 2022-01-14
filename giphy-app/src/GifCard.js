import React, {useState} from "react";



export default function GifCard(props){
    const [gifprop, setGitProp] = useState(props.gif)


console.log(gifprop)
    return(

        <div>
            <img src={gifprop.data.images.original.url}/>
        </div>
    )

}