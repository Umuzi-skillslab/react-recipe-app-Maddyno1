import { useState, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./UI.module.css";

const SearchBar = ({ searchTerm, onSearchChange, placeholder = "Search recipes..." }) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef(null);

    //Enter key: tidy the term and dismiss the keyboard
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearchChange(searchTerm.trim());
        inputRef.current.blur();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`${styles.searchBar} ${isFocused ? styles.searchFocused : ""}`}
        >
            <input
                ref={inputRef}
                type="search"
                value={searchTerm}
                placeholder={placeholder}
                aria-label="Search recipes"
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <small className={styles.searchHint}>Results update as you type. Press Enter to finish.</small>
        </form>
    );
};

SearchBar.propTypes ={
    searchTerm: PropTypes.string.isRequired,
    onSearchChange: PropTypes.func.isRequired,
    placeholder: PropTypes,
};

export default SearchBar