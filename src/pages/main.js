import * as React from 'react';

import '../App.css';
function Home() {
  const [XValue, setXValue]=React.useState(localStorage.getItem('X'))
  const [reset, setReset]=React.useState(false)

  const callAPI = async () =>{
    await fetch('https://cgi.cse.unsw.edu.au/~cs6080/raw/data/score.json',{method: 'GET'})
    .then((data)=>data.json())  
    .then((res)=>{
      console.log('fetching',res);
      setXValue(res.score);
      localStorage.setItem('X',res.score)
    })
  }
  React.useEffect(() => {
    if (localStorage.getItem('X')===undefined || localStorage.getItem('X')===null){
      callAPI()
    }
  }, [reset]);

  const congrate = () => {
    alert('Congratulations!' );
    localStorage.removeItem('X');
    setReset(!reset);
  }

  React.useEffect(() => {
    if (XValue===0){
      congrate()
    }
  }, [XValue]);

  return <>
  <div className='container' style={{textAlign:'center'}}>
    <div style={{color:'blue', fontSize:'2em'}}> Please choose an option from the sidebar.<br />
    Games left to win: {XValue} <button onClick={()=>{
      localStorage.removeItem('X');
      setReset(!reset)
      // localStorage.setItem('X', parseInt(XValue) - 1);
      // setXValue(parseInt(XValue) - 1);
    }}>Reset</button></div>
  </div></>
  
}
export default Home;