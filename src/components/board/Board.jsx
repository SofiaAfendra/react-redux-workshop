import { compose } from 'redux';
import { connect } from 'react-redux';
import { squares } from 'models';
import { withBoardProps } from './withBoardProps';
import styles from './styles.module.css';

const Board = ({ renderRow }) => (
  <div className={styles.board}>
    {renderRow(0, 1, 2)}
    {renderRow(3, 4, 5)}
    {renderRow(6, 7, 8)}
  </div>
);

const mapStateToProps = (state) => ({
  squares: squares(state),
});

export default compose(connect(mapStateToProps), withBoardProps)(Board);
