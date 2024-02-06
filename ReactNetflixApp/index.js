import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import "./index.css";
import Sdata from './Sdata';

function ncards(val)
{
  console.log(val);
  return(
    <Card
      imgsrc= {val.imgsrc}
      title= {val.title}
      sname= {val.sname}
      link= {val.link}
    />
  );
}
ReactDOM.render(
  <>
    <h1 className='heading_style'> List of Top 5 Netflix Series</h1>
    {Sdata.map(ncards)}

  </>,

  document.getElementById("root")
);

