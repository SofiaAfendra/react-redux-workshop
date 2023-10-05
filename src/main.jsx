import * as React from 'react'
import ReactDOM from 'react-dom/client'
import styles from './index.modules.css'

/* TODO: 
- Change component so when clicked it updates its state and draws 'X' or 'O' alternately
Hint: A functional component can use multiple state hooks
 */

export const Square = () =>
   <div className={styles.square}>
      x
   </div>

ReactDOM.createRoot(document.getElementById('root')).render(<Square />);