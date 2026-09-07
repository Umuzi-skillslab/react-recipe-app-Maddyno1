import styles from './UI.module.css';

function Button({ variant = 'primary', children, onClick }) {
    return (
        <button className={`${styles.btn} ${styles[`btn-${variant}`]}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;