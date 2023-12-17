import ReactDOM from 'react-dom/client';
import styles from './index.module.css';

/* TODO: 
- Change component so when clicked it updates its state and draws 'X' or 'O' alternately
Hint: A functional component can use multiple state hooks
 */

export const Square = () => <button className={styles.square}>x</button>;

ReactDOM.createRoot(document.getElementById('root')).render(<Square />);
