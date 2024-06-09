import { withBoardProps } from './withBoardProps';
import styles from './styles.module.css';

/* TODO:
- Create a mapStateToProps function to request the required part from state.
    Hint: use the selectors here.
- Use mapStateToProps with connect which is a higher order function from Redux.
- Use compose function from Redux to compose both connect and the HOC with the component.
*/

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
