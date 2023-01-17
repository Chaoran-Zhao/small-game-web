import * as React from 'react';

import '../App.css';
//  The code is refer to the tictac example from the tutorial solution
function Tictac() {
  const defaultBoard =  [ [ '', '', '', ], 
                        [ '', '', '', ],
                        [ '', '', '', ], ]
  const [board, setBoard] = React.useState(defaultBoard); 
  const [player, setPlayer] = React.useState('O');
  const [winPlayer, setWinPlayer] = React.useState(''); 
  const [click, numClick] = React.useState(0)

  const handleClick = (rowNum, colNum) => {
    setCell(rowNum, colNum);
    numClick(click+1)
    console.log(click)
    checkWin();
  }
  const setCell = (x, y) => {
    const currPlayer = player;
    const newBoard = {...board}; //[ ... board ]
    newBoard[x][y] = currPlayer; 

    setBoard(newBoard);
    setPlayer(player === 'X'? 'O': 'X');
  }

  const setWinCount = (winPlayer) => {
    if(winPlayer === 'O'){
      const curLeft = localStorage.getItem('X')
      localStorage.setItem("X", parseInt(curLeft)-1);
    }
  }
  const checkWin = () => {
    const winningLines = [
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]],
    ]

    for (let line of winningLines) {
      const [a, b, c] = line;
      if (board[a[0]][a[1]] !== '' && board[a[0]][a[1]] === board[b[0]][b[1]] && board[b[0]][b[1]] === board[c[0]][c[1]]) {
        //Game won
        setWinPlayer(player === 'X' ? 'X' : 'O')
        setWinCount(player);
        return;
      }
    }

    // all filled
    // let no = Nowin();
    // console.log('no win',no)
    // if (no=== true){
    //   alert('no body win');
    //   setWinPlayer('N')
    // }
  }
  // const Nowin =()=>{
  //   const temp = [...board]
  //   for (let i = 0; i<temp.length;i++){
  //     for (let j = 0; j<temp[i].length; j++){
  //       console.log(i,j,temp)
  //       if (temp[i][j]===''){
  //         return false;
  //       }
  //       if (i===2 && j===2){
  //         return true;
  //       }
  //     } 
  //   }
  // }


  const color = {
    'X':'rgb(220,220,255',
    'O':'rgb(255,220,220)'
  }

  return <>
  <div className='container1' style={{textAlign:'center'}}> 
    <div className='basicBoard'>
      {Array.from({length: 3}).map((row, rowNum)  => {
          return (
            <div className='row'> 
              {Array.from({length: 3}).map((cell, colNum) => {
                return (
                <div 
                  className='cell'
                  onClick={() => handleClick(rowNum, colNum)}
                  style={{backgroundColor: board[rowNum][colNum]==='' ? color[player] : 'transparent'}}
                > 
                  {board[rowNum][colNum]}
                </div>
                )
              })}
            </div>)
        })}
    </div>
    <div className='info' style={{display: click===9 || winPlayer!=='' ? 'flex' : 'none'}}>{winPlayer==='' ? <p style={{fontSize:'14pt'}}>No one wins</p> : <p style={{fontSize:'14pt'}}> {winPlayer} wins</p> } <br />
    <p >A total of {click} moves were complete</p>
    </div>
  </div>
  </>
}
export default Tictac;