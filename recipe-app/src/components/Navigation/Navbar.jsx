import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from './Navbar.module.css';

function Navbar({ favoritesCount = 0 }) {
    const location = useLocation();
    //Burger menu useState
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false) //Collapses after any navigation

    //startsWith keeps "Recipes highlighted on /recipes/id detail pages"
    const linkClass = (path, exact = true) =>
        (exact ? location.pathname === path : location.pathname.startsWith(path))
            ? `${styles.navLink} ${styles.active}`
            : styles.navLink

    return (
        <nav className={styles.navbar}>
            <div className={styles.navHeader}>
                <Link to="/" className={styles.brand} onClick={closeMenu}>Flaming Inferno</Link>
                <button
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
                <Link to="/" className={linkClass("/")} onClick={closeMenu}>Home</Link>
                <Link to="/recipes" className={linkClass("/recipes", false)} onClick={closeMenu}>Recipes</Link>
                <Link to="/meal-planner" className={linkClass("/meal-planner")} onClick={closeMenu}>Meal Planner</Link>
                <Link to="/favorites" className={linkClass("/favorites")} onClick={closeMenu}>
                    Favorites {favoritesCount > 0 && `(${favoritesCount})`}
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;