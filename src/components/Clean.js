import { useEffect, useState } from "react";


function Hello(){
    function effectFn(){
        console.log("Created")
    }
    useEffect(()=>{
        console.log("Created!");
        return () => console.log("destoryed! :(");
    },  [])
    return <h1>Hello</h1>
}


export default function Clean(){
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return(
        <div>
            {showing ? <Hello/> : null}
        <button onClick={onClick}>{showing ? "Hide": "show"}</button>
        </div>
    )
}