import styles from "./UI.module.css";

function Loading({ message = "Loading recipes..." }) {
    return (
        <div className={styles.loading}>
            <div className={styles.spinner} />
            <p>{message}</p>
        </div>
    );
}

export default Loading;