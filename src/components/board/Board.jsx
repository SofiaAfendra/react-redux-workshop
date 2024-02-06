import { withBoardProps } from './withBoardProps';
import styles from './styles.module.css';

export const Board = ({ renderRow }) => {
  return (
    <div className={styles.board}>
      {renderRow(0, 1, 2)}
      {renderRow(3, 4, 5)}
      {renderRow(6, 7, 8)}
    </div>
  );
};

export default withBoardProps(Board);
