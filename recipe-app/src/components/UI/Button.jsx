import PropTypes from 'prop-types';
import styles from './UI.module.css';

//Class is picked dynamically from the prop
function Button({ variant = 'primary', type = "button", onClick, children }) {
    return (
        <button type={type} className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
            {children}
        </button>
    );
}

Button.prototype = {
    variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
    type: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
};

export default Button;