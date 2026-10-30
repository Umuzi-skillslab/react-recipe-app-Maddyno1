import { useState } from "react";
import styles from "./UI.module.css";

const SearchBar = ({ searchTerm, onSearchChange, placeholder = "Search recipes..." }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={`${styles.searchBar} ${isFocused ? styles.searchFocused : ""}`}>
            <input
                type="search"
                value={searchTerm}
                placeholder={placeholder}
                aria-label="Search recipes"
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <small className={styles.searchHint}>Results update as you type</small>
        </div>
    );
};

export default SearchBar