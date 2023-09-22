import styles from './styles.module.css';

const Square = ({ handleClick, value }) => (
  <button className={styles.square} onClick={handleClick}>
    {value}
  </button>
);

export default Square;
