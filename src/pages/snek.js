import * as React from 'react';

import '../App.css';

function Snek() {
    const check = [9,19,29,39,49,59,69,79,89,99];
    return <>
    <div className='container2' style={{textAlign:'center'}}>
    {[...Array(100)].map((e,index) => { return (
      <>{check.includes(index) 
        ? <><div style={{display: 'inline-flex',border: '1px solid #333333',textAlign: 'center',minHeight:'30px', minWidth:'40px'}} key={index}></div><br /></> 
        : <><div style={{display: 'inline-flex',border: '1px solid #333333',textAlign: 'center',minHeight:'30px', minWidth:'40px'}} key={index}></div></>}</>
    )})}</div>
    </>
}
export default Snek;