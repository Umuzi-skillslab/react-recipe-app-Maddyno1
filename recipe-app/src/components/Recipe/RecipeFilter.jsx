import PropTypes from "prop-types";
import Button from "../UI/Button";
import styles from "../UI/UI.module.css";

//Option values set according to those in recipesData.js
const RecipeFilter = ({
    category, cuisine, difficulty, sortBy,
    onCategoryChange, onCuisineChange, onDifficultyChange, onSortChange,
    onClear, hasActiveFilters,
}) => {
    return (
        <div className={styles.filterBar}>
            <select className={styles.select} value={category} onChange={(e) => onCategoryChange(e.target.value)}>
                <option value="all">All Categories</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="dessert">Dessert</option>
                <option value="snack">Snack</option>
            </select>

            <select className={styles.select} value={cuisine} onChange={(e) => onCuisineChange(e.target.value)}>
                <option value="all">All Cuisines</option>
                <option value="American">American</option>
                <option value="British">British</option>
                <option value="French">French</option>
                <option value="Italian">Italian</option>
                <option value="Mexican">Mexican</option>
                <option value="South African">South African</option>
                <option value="Traditional Southern African">Traditional Southern African</option>
            </select>

            <select className={styles.select} value={difficulty} onChange={(e) => onDifficultyChange(e.target.value)}>
                <option value="all">All Difficulties</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>

            <select className={styles.select} value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
                <option value="default">Sort: Default</option>
                <option value="title">Title (A-Z)</option>
                <option value="timeAsc">Cook time (shortest)</option>
                <option value="timeDesc">Cook time (longest)</option>
                <option value="difficulty">Difficulty (easiest first)</option>
            </select>

            {/* Only shown when something is filtered or sorted */}
            {hasActiveFilters && (
                <Button variant="secondary" onClick={onClear}>Clear filters</Button>
            )}
        </div>
    );
};

RecipeFilter.propTypes = {
    category: PropTypes.string.isRequired,
    cuisine: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    sortBy: PropTypes.string.isRequired,
    onCategoryChange: PropTypes.func.isRequired,
    onCuisineChange: PropTypes.func.isRequired,
    onDifficultyChange: PropTypes.func.isRequired,
    onSortChange: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    hasActiveFilters: PropTypes.bool,
};

export default RecipeFilter;