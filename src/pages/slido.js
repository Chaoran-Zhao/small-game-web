import * as React from 'react';
import l1 from '../data/shrek/1.png';
import l2 from '../data/shrek/2.png';
import l3 from '../data/shrek/3.png';
import l4 from '../data/shrek/4.png';
import l5 from '../data/shrek/5.png';
import l6 from '../data/shrek/6.png';
import l7 from '../data/shrek/7.png';
import l8 from '../data/shrek/8.png';


export default function Slido() {
  const [reset, setReset]=React.useState(false)
  const [randSet, setRandom] = React.useState([])
  const [curBlank, setBlank] = React.useState(null)
  const [curMap, setMap] = React.useState({})
  const [movement, setMove] = React.useState(0)
  const [status, setStatus] = React.useState(false)

  const [active, setActive] = React.useState(false)

  const check = [2,5,8];
  const list = [l1,l2,l3,l4,l5,l6,l7,l8]//0-7
  const generateRandom = () =>{
    const max = 8;
    const min = 0;
    let randList = [];
    while(randList.length < 9){
      const random = Math.floor(Math.random()*(max-min+1)+min);
      if(randList.indexOf(random) === -1 ) {
        randList.push(random);
      }
    }
    // let randList =[1,2,3,4,5,6,7,0,8]
    console.log(randList);
    setRandom(randList);
    for (const i in randList){
      if (randList[i]===0){
        setBlank( parseInt(i));
        console.log(i)
      }
    }
    for (let i=0; i<9;i++){
      const temp = curMap
      temp[i] = list[randList[i]-1]
      setMap(temp)
    }
  }
  React.useEffect(() => {
    generateRandom();
  },[reset])

  React.useEffect(() => { 
  },[curMap])

  const move =(index)=>{
    setMove(movement+1)
    if (index + 1 ===curBlank && index!==2 & index!==5 && index!==8){
      const temp ={...curMap}
      const temp1 = curMap[index]
      temp[index] = {...curMap[index+1]}
      temp[index+1] = temp1
      setMap(temp)
      setBlank(index)
      if(Winning(temp)){
        const curScore = localStorage.getItem('X')
        localStorage.setItem('X', parseInt(curScore) + 1)
        alert('Correct!')
        setStatus(true)
      }
    }else if (index - 1 === curBlank && index!==0 & index!==3 && index!==6){
      console.log('here wrong')
      const temp ={...curMap}
      const temp1 = curMap[index]
      temp[index] = {...curMap[index-1]}
      temp[index-1] = temp1
      setMap(temp)
      setBlank(index)
      if(Winning(temp)){
        const curScore = localStorage.getItem('X')
        localStorage.setItem('X', parseInt(curScore) + 1)
        alert('Correct!')
        setStatus(true)
      }
    }else if (index + 3 === curBlank){
      const temp ={...curMap}
      const temp1 = curMap[index]
      temp[index] = {...curMap[index+3]}
      temp[index+3] = temp1
      setMap(temp)
      setBlank(index)
      if(Winning(temp)){
        const curScore = localStorage.getItem('X')
        localStorage.setItem('X', parseInt(curScore) + 1)
        alert('Correct!')
        setStatus(true)
      }
    }else if(index -3 === curBlank){
      const temp ={...curMap}
      const temp1 = curMap[index]
      temp[index] = {...curMap[index-3]}
      temp[index-3] = temp1
      setMap(temp)
      setBlank(index)
      if(Winning(temp)){
        const curScore = localStorage.getItem('X')
        localStorage.setItem('X', parseInt(curScore) + 1)
        alert('Correct!')
        setStatus(true)
      }
    } 
  }

  const Winning = (dict)=>{
    for (const i in list){
      if (dict[i]!==list[i]){
        return false;
      }
    }
    return true;
  }

  const SolveP = ()=>{
    const temp ={}
    for (const i in list){    
      temp[i] = list[i]  
    }
    setMap(temp)
  }

  const arrowUpPressed = useKeyPress('ArrowUp');
  const arrowDownPressed = useKeyPress('ArrowDown');
  const arrowLeftPressed = useKeyPress('ArrowLeft');
  const arrowRightPressed = useKeyPress('ArrowRight');
  React.useEffect(() => {
    if (active===true){
      if (arrowUpPressed) {
        console.log('keyUP');
        console.log(curBlank+3);
        const temp ={...curMap}
        const temp1 = curMap[curBlank+3]
        temp[curBlank+3] = {...curMap[curBlank]}
        temp[curBlank] = temp1
        setMap(temp)
        setBlank(curBlank+3)
        if(Winning(temp)){
          const curScore = localStorage.getItem('X')
          localStorage.setItem('X', parseInt(curScore) + 1)
          alert('Correct!')
          setStatus(true)
        }
      }
      if (arrowDownPressed) {
        console.log('keyDown')
        const temp ={...curMap}
        const temp1 = curMap[curBlank-3]
        temp[curBlank-3] = {...curMap[curBlank]}
        temp[curBlank] = temp1
        setMap(temp)
        setBlank(curBlank-3)
        if(Winning(temp)){
          const curScore = localStorage.getItem('X')
          localStorage.setItem('X', parseInt(curScore) + 1)
          alert('Correct!')
          setStatus(true)
        }
      }
      if (arrowLeftPressed) {
        console.log('keyLeft')
        if (curBlank===2 || curBlank===5 || curBlank===8){
            console.log('should not move')
        }else{
            const temp ={...curMap}
            const temp1 = curMap[curBlank+1]
            temp[curBlank+1] = {...curMap[curBlank]}
            temp[curBlank] = temp1
            setMap(temp)
            setBlank(curBlank+1)
            if(Winning(temp)){
            const curScore = localStorage.getItem('X')
            localStorage.setItem('X', parseInt(curScore) + 1)
            alert('Correct!')
            setStatus(true)
            }
        }
        
      }
      if (arrowRightPressed) {
        console.log('keyRight')
        if (curBlank===0 || curBlank===3 || curBlank===6){
            console.log('should not move')
        }else{
            const temp ={...curMap}
            const temp1 = curMap[curBlank-1]
            temp[curBlank-1] = {...curMap[curBlank]}
            temp[curBlank] = temp1
            setMap(temp)
            setBlank(curBlank-1)
            if(Winning(temp)){
            const curScore = localStorage.getItem('X')
            localStorage.setItem('X', parseInt(curScore) + 1)
            alert('Correct!')
            setStatus(true)
            }
        }
        
      }
    }
    
  }, [arrowUpPressed,arrowDownPressed,arrowLeftPressed,arrowRightPressed]);


  return <><div className='container1' style={{textAlign:'center'}}>
    <div onClick={()=>{
      setActive(!active)
    }}><div style={{fontSize:'2rem'}}>Click on the image pieces or click on the plate then use the arrow key to move it!</div>
      <div style={{width: '460px', height: '460px', margin:'0 auto',boxShadow: !active ? 'none' : ' 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.5), 0 -6px 64px -6px hsla(0, 0%, 0%, 0.05)'}} onClick={()=>{
      setActive(!active)
    }}>
    {[...Array(9)].map((e,index) => { return (
      <>{check.includes(index) 
        ? <><div style={{display:'inline-flex', width: '150px', height: '150px',border: '1px solid #333',textAlign: 'center',}} key={index}><img src={curMap[index]} alt="" 
        onClick={()=>{
          move(index);}}></img></div><br /></> 
        : <><div style={{display: 'inline-flex', width: '150px', height: '150px',border: '1px solid #333',textAlign: 'center',}} key={index}><img src={curMap[index]} alt=""
        onClick={()=>{
          move(index);}}></img></div></>}</>
    )})} <br />
    <button onClick={()=>{
      SolveP();
      setStatus(true);
      console.log(status)
      setMove(1)
      }} disabled={status===true ? true : false}> Solve</button>
    <button onClick={()=>{
      setReset(!reset); 
      setMove(0)
      setStatus(false);   
      }} disabled={movement===0 && status!==true ? true : false}> Reset</button>  </div>
      </div>
  </div></>

}

function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = React.useState(false);
  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }
  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };
  // Add event listeners
  React.useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return keyPressed;
}