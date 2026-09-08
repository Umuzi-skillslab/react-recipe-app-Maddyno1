import styles from "./UI.module.css";

function Modal({ onClose, children }) {
    //stopPropagation keeps clicks inside the box from closing it
    return (
        <div className={styles.modalBackdrop} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose}>✕</button>
                {children}
            </div>
        </div>
    );
}

export default Modal;