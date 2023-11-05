import { compose } from 'redux';
import { withBoardProps } from './withBoardProps';
import { withModelProps } from '@/libraries';
import { squares } from '@/models';

export const Board = ({ renderRow }) => {
  return (
    <div>
      {renderRow(0, 1, 2)}
      {renderRow(3, 4, 5)}
      {renderRow(6, 7, 8)}
    </div>
  );
};

export default compose(withModelProps({ squares }), withBoardProps)(Board);
