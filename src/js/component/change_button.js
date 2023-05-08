import React, { useState } from "react";


const Change_button = () => {
    const [index,setIndex] = useState(0)

    const [functions,setFunctions] = useState(["1", "2", "3"])

    const cycle = () => {
        setInterval(() => {
            if(index == 2){
                setIndex(0);
            }
            console.log(functions[index]);
            setIndex(prev => prev + 1);
            
        }, 1000);
        
    }

    return(
        <button type="button" className="btn btn-primary btn-lg" onClick={() => {
            cycle()
        }}>cycle</button>
    );
}

export default Change_button;