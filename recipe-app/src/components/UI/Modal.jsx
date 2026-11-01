import PropTypes from 'prop-types';
import styles from "./UI.module.css";

const Modal = ({ onClose, children }) => {
    //stopPropagation keeps clicks inside the box from closing it
    return (
        <div className={styles.modalBackdrop} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose}>✕</button>
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node,
};

export default Modal;