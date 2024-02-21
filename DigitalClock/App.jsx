import React, { useState } from "react";

const App = () =>{
    let time = new Date().toLocaleTimeString();
    const [ctime, Setctime] = useState(time);

    const UpdateTime = () =>{
        time = new Date().toLocaleTimeString();
        Setctime(time);
    };
    setInterval(UpdateTime,1);
    return(
        <>
            <h1>{ctime}</h1>

        </>
    );
};
export default App;
