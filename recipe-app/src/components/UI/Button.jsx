import styles from './Button.module.css';

function Button({ variant = 'primary', children, onClick }) {
    return (
        <button className={`${styles.btn} ${styles[`btn-${variant}`]}`} onClick={onClick}>
            {children}
        </button>
    );
}