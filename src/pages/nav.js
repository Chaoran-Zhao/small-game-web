import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import logo from '../assets/logo.png';
function LeftNav() {
  const navigate = useNavigate();
  const pages = ['Home', 'Tictac', 'Tower', 'Snek'];
  const pages1 = ['H', 'Ti', 'To', 'S'];

  return <>
    <nav className="left sideNav d-flex flex-column">
      <div style={{textAlign:'center'}} ><img className="logo" src={logo} style = {{height:'50px', width: '50px' , margin:'15px', top:'0px'}} alt=""></img> 
        {window.innerWidth > 1400
        ? <>{pages.map((page, index) => (
          <p key={index} 
          onClick={()=>{
            if ({page}.page==='Home'){               
              navigate('/home');
            }
            if ({page}.page==='Tictac'){
              navigate('/tictactoe');
            }
            if ({page}.page==='Tower'){
              navigate('/tower');
            }
            if ({page}.page==='Snek'){
              navigate('/snek');
            }
          }} >
            {page} 
          </p>
        ))}</>
        : <>{pages1.map((page, index) => (
            <p key={index} 
            onClick={()=>{
            if ({page}.page==='H'){               
              navigate('/1');
            }
            if ({page}.page==='Ti'){
              navigate('/tictactoe');
            }
            if ({page}.page==='To'){
              navigate('/tower');
            }
            if ({page}.page==='S'){
              navigate('/snek');
            }
            }} > {page} </p>
        ))}</>}</div>
    </nav>
  </>

}
export default LeftNav;