import { useState } from "react";
import { Link,useLocation } from "react-router-dom";
import styles from './Navbar.module.css';

function Navbar({favoritesCount = 0 }) {
    const location = useLocation();
    //Burger menu useState
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false) //Collapses after any navigation

    //startsWith keeps "Recipes highlighted on /recipes/id detail pages"
    const linkClass = (path, exact = true) =>
    (exact ? location.pathname === path : location.pathname.startsWith(path))
    ? `${styles.navLink} ${styles.actice}`
    : styles.navLink

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
                Favorites {favoritesCount > 0 && `(${favoritesCount})`}
            </Link>
        </nav>
    );
}

export default Navbar;