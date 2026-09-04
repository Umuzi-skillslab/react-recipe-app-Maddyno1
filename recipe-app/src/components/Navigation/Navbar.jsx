import { Link,useLocation } from "react-router-dom";
import styles from './Navbar.module.css';

function Navbar() {
    const location = useLocation();

    return (
        <nav className={styles.navbar}>
            <Link
                to="/"
                className={location.pathname === '/' ? styles.active : ''}
            >
                Home
            </Link>

            <Link
                to="/recipes"
                className={location.pathname.startsWith('/recipes') ? styles.active : ''}
            >
                Recipes
            </Link>

            <Link
                to="/meal-planner"
                className={location.pathname === '/meal-planner' ? styles.active : ''}
            >
                Meal Planner
            </Link>

            <Link
                to="/favorites"
                className={location.pathname === '/favorites' ? styles.active : ''}
            >
                Favorites
            </Link>
        </nav>
    );
}

export default Navbar;