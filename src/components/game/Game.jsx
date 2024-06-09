import { compose } from 'redux';
import { connect } from 'react-redux';
import { Board } from 'components';
import {
  player1,
  player2,
  squares,
  winner,
  xIsNext,
  resetGame,
  setPlayer1,
  setPlayer2,
  setSquares,
  setWinner,
  setXIsNext,
  resetPlayers,
} from 'models';
import { withGameProps } from './withGameProps';
import styles from './styles.module.css';

// TODO: do you get all the props needed from the custom hook from withGameProps?
const Game = ({
  player1,
  player2,
  status,
  handleClick,
  handlePlayer1,
  handlePlayer2,
  handleReset,
  player1Ref,
  player2Ref,
}) => (
  <div className={styles.gameWrapper}>
    <div className={styles.boardAndStatusWrapper}>
      <div>{status}</div>
      <div className={styles.boardWrapper}>
        <Board onClick={handleClick} />
      </div>
    </div>

    <div className={styles.inputWrapper}>
      <div className={styles.input}>
        <label>Player 1:</label>
        <input value={player1} ref={player1Ref} onChange={handlePlayer1} />
      </div>

      <div className={styles.input}>
        <label>Player 2:</label>
        <input value={player2} ref={player2Ref} onChange={handlePlayer2} />
      </div>

      <div className={styles.resetBtnWrapper}>
        <button onClick={handleReset} className={styles.resetButton}>
          Reset
        </button>
      </div>
    </div>
  </div>
);

// TODO:  using the custom hook withGameProps do you now need to pass the props to the GameComponent?
const mapStateToProps = (state) => {
  return {
    player1: player1(state),
    player2: player2(state),
    xIsNext: xIsNext(state),
    winner: winner(state),
    squares: squares(state),
  };
};

const mapDispatchToProps = {
  setPlayer1,
  setPlayer2,
  setSquares,
  setWinner,
  setXIsNext,
  resetGame,
  resetPlayers,
};

// TODO:  using the custom hook withGameProps do you now need to pass the props to the GameComponent?
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGameProps,
)(Game);
