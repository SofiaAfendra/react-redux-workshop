import styles from './styles.module.css';

export const Square = ({ onClick, value }) => (
  <button onClick={onClick} className={styles.square}>
    {value}
  </button>
);
