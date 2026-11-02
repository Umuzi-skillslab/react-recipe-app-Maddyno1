import PropTypes from 'prop-types';
import styles from "./UI.module.css"

const Card = ({ title, children, className="" }) => {
    return (
        <div className={`${styles.card} ${className}`}>
            {title && <h3 className={styles.cardTitle}>{title}</h3>}
            {children}
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Card;