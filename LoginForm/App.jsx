import React, { useState } from "react";

const App = () =>{
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [fullName, setFullName] = useState();

    
    const inputEvent = (event) =>  {
        console.log(event.target.value);
        setName(event.target.value);
    };

    const inputEventTwo = (event) =>  {
       
        setPassword(event.target.value);
    };


    const onSubmit = (event) =>  {
        event.preventDefault();
        setFullName(name)
    };
    return(
        <>
        <div className="login_div">
            <h1> Login Form </h1>
        </div>
        <div className="main_div">

        <form onSubmit={onSubmit}>
            <h1> Hello {fullName} </h1>

            <input type="text" 
            placeholder="Enter Your Name"  
            onChange={inputEvent}
            value={name}
           />
           
           <br/>

           <input type="password" 
            placeholder="Enter Your Password"  
            onChange={inputEventTwo}
            value={password}
           />

           <br/>

           <button type="submit"> submit </button>
        </form>

        </div>
        </>
    );
};
 export default App;