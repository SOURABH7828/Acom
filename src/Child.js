import { useEffect, useRef } from "react";

function Child(props){
    const lastval = useRef();
    useEffect(()=>{
        lastval.current=props.count
    })
    const previouseProps= lastval.current
    return(
        <div>
            <h1> Count is:{props.count}</h1>
            <h1>previous Props is :{previouseProps}</h1>

        </div>
    )
}
export default Child;