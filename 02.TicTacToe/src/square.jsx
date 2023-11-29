
import PropTypes from 'prop-types';

export default function Square ({children, index, updateBoard }){


  return (
    <div 
      onClick={() => updateBoard(index)} 
      className="ttt-gameContainer-box">
      {children}
    </div>
  )

}

Square.propTypes = {
  children: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  index: PropTypes.number,
  updateBoard: PropTypes.func
  
} 