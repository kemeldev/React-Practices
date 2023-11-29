
import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import WinnerModal from './WinnerModal'
import Square from './square'




function App () {

  const saveGametoLocalStorage = ({board, turn})=>{
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)

  }

  const resetGameStorage = ()=> {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const checkWinner = (arr)=>{
    const winnerPositions = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for (const positions of winnerPositions){
      const [a,b,c]= positions
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        return arr[a]
      } 
    }

    return null
  }

  const checkEndGame = (arr)=>{

    return  arr.every((item) => item !== null)
  }

  const turns = {
    turnX : "✖️",
    turnO : "⚪"
  }  

  const [turn , setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? turns.turnX
  })
  
  const [board, setBoard ] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return new Array(9).fill(null)
  })

  const [winner, setWinner] = useState(null)

  
  const resetGame = () =>{
      setBoard(new Array(9).fill(null))
      setTurn(turns.turnX)
      setWinner(null)

      resetGameStorage()
  }

  // const restartBoard = ()=>{
  //    return setBoard(new Array(9).fill(null))
  // }

  const updateBoard = (index) =>{  
    if (board[index] || winner) return

    const newBoard = [...board]

    newBoard[index] = turn 

    setBoard(newBoard)

    const newTurn = turn === turns.turnX ? turns.turnO : turns.turnX
    
    setTurn( newTurn )

    saveGametoLocalStorage({
      board: newBoard,
      turn: turn
    })

    const newWinner = checkWinner(newBoard)
    

    if(newWinner){
      confetti()
      setWinner(newWinner)  
      
      
    } else if (checkEndGame(newBoard)){
      setWinner(false)
    }  

    
    
  } 
  

  return (
    <>
      <main className='ttt-container'>
        <h1>Tic Tac Toe Game</h1>
        <button onClick={resetGame} className='ttt-resetButton'>Restart Game</button>
        <div className='ttt-gameContainer'>
          {
            board.map((item, index) =>(          

              <Square                
                key={index}
                index={index}
                updateBoard={updateBoard} >
                  {item}
              </Square>

            ))
          }
        </div>
          <h2>Turn goes to</h2>
        <div className='ttt-turnsContainer'>
          <div className='ttt-turnsContainer-box'>{turn}</div>
          
        </div>


        <WinnerModal 
          
          winner={winner}
          reset={resetGame}>
            
            
        </WinnerModal>
        
      </main>
    </>
  )
}

export default App
