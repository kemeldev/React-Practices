import PropTypes from 'prop-types'

function WinnerModal ({winner, reset}){

  if (winner === null) return null

  const winnerText = winner === false ? 'Empate' : 'Ganó'

 

  return(
    <div  className='ttt-winnerModal'>
      <h1>{winnerText}</h1>
      <div>{winner}</div>
      <button onClick={reset}>Empezar de nuevo</button>
    </div>
  )
}

WinnerModal.propTypes = {
  winner: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  reset: PropTypes.func
  
} 

export default WinnerModal