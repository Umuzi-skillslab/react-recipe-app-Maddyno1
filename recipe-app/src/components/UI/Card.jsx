import styles from "./UI.module.css"

function Card({ title, children }) {
    return (
        <div className={styles.card}>
            {title && <h3 className={styles.cardTitle}>{title}</h3>}
            {children}
        </div>
    );
}

export default Card;