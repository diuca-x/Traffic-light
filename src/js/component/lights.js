import React, { useState } from "react";

const Lights = () =>{

    const [red,set_red] = useState("none")
    const [yellow, set_yellow] = useState("none")
    const [green, set_green] = useState("none")

    
    const change_red = () =>{
        set_red("0 0 20px 10px rgba(255,255,255,0.8)")
        set_yellow("none")
        set_green("none")
        
    }
    const change_yellow = () =>{
        set_red("none")
        set_yellow("0 0 20px 10px rgba(255,255,255,0.8)")
        set_green("none")
        
    }
    const change_green = () =>{
        set_red("none")
        set_yellow("none")
        set_green("0 0 20px 10px rgba(255,255,255,0.8)")
        
    }
     
    return(
        <>
            <div className="col-8 justify-content-center align-items-center rounded-top rounded-bottom bg-black py-2">
                <div className="rounded-circle bg-danger mx-auto" style={{width: "7vw", height: "7vw", boxShadow: red}} onClick={() =>{
                        change_red()
                    }}>                    
                </div>         
                       
                <div className="w-100"></div>

                <div className="rounded-circle bg-warning mx-auto" style={{width: "7vw", height: "7vw", boxShadow: yellow}} onClick={() =>{
                        change_yellow()
                    }}>                    
                </div>

                <div className="w-100"></div>

                <div className="rounded-circle bg-success mx-auto" style={{width: "7vw", height: "7vw", boxShadow: green}} onClick={() =>{
                        change_green()
                    }}>   
                </div>
                
            </div>
        </>

    );


    
}


export default Lights