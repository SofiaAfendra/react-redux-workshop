import { compose } from 'redux';
import { withBoardProps } from './withBoardProps';
import { connect } from 'react-redux';
import { squares } from 'models';

export const Board = ({ renderRow }) => {
  return (
    <div>
      {renderRow(0, 1, 2)}
      {renderRow(3, 4, 5)}
      {renderRow(6, 7, 8)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  squares: squares(state),
});

export default compose(connect(mapStateToProps), withBoardProps)(Board);
