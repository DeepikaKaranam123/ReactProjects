import React from "react";
import  ReactDOM  from "react-dom";
import './index.css';

let currDate = new Date(2022,5,12,1);
currDate = currDate.getHours();
let greeting = "";
let cssStyling = {}

if(currDate >= 1 && currDate < 12)
{
  greeting = "Good Morning";
  cssStyling.color = "green";
}
else if (currDate >= 12 && currDate < 19)
{
  greeting = "Good Afternoon";
  cssStyling.color = "orange";
}
else
{
  greeting = "Good Night";
  cssStyling.color = "black";
}

ReactDOM.render(
  <>

  <div>
        <h1>Hello, Everyone <span style={cssStyling}>{greeting}</span></h1>
  </div>

    </>
, document.getElementById('root'));