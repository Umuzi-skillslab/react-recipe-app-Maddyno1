import styles from "./UI.module.css"

function Card({ title, children, className="" }) {
    return (
        <div className={`${styles.card} ${className}`}>
            {title && <h3 className={styles.cardTitle}>{title}</h3>}
            {children}
        </div>
    );
}

export default Card;