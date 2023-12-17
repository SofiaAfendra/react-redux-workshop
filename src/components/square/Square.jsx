import styles from './styles.module.css';

export const Square = ({ handleClick, value }) => (
  <button className={styles.square} onClick={handleClick}>
    {value}
  </button>
);
