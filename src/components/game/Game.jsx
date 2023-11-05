import { Board } from '@/components';
import styles from './styles.module.css';
import { withGameProps } from './withGameProps';
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
} from '../../models/game';
import { compose } from 'redux';
import { connect } from 'react-redux';

const GameComponent = ({
  player1,
  player2,
  squares,
  gameStatus,
  handlePlayerMove,
  handlePlayer1,
  handlePlayer2,
  reset,
  player1Ref,
  player2Ref,
}) => (
  <div className={styles.game}>
    <div className={styles.gameStatus}>{gameStatus}</div>
    <div className={styles['game-board']}>
      <Board squares={squares} onSquareClick={handlePlayerMove} />
    </div>
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <label htmlFor='player-1'>Player 1</label>
        <input
          type='text'
          id='player-1'
          value={player1}
          onChange={handlePlayer1}
          ref={player1Ref}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor='player-2'>Player 2</label>
        <input
          type='text'
          id='player-2'
          value={player2}
          onChange={handlePlayer2}
          ref={player2Ref}
        />
      </div>
      <div className={styles.row}>
        <button type='button' onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  </div>
);

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
};

export const Game = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGameProps,
)(GameComponent);
