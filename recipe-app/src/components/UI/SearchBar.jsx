import { useState } from "react";
import styles from "./UI.module.css";

function SearchBar({ searchTerm, onSearchChange, placeholder = "Search recipes..." }) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        //Form exists so Enter submits properly
        <form
            className={`${styles.searchBar} ${isFocused ? styles.serachFocused : ""}`}
            onSubmit={(e) => e.preventDefault()}
        >
            <input
                type="text"
                value={searchTerm}
                placeholder={placeholder}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar