import { withBoardProps } from './withBoardProps';
import styles from './styles.module.css';

const Board = ({ renderRow }) => (
  <div className={styles.board}>
    {renderRow(0, 1, 2)}
    {renderRow(3, 4, 5)}
    {renderRow(6, 7, 8)}
  </div>
);

export default withBoardProps(Board);
