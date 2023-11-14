import styles from './styles.module.css';

export const Square = ({ value, onClick }) => {
  return (
    <button onClick={onClick} className={styles.square}>
      {value}
    </button>
  );
};
