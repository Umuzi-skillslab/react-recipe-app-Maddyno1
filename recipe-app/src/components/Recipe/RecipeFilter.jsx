import styles from "../UI/UI.module.css";

//Option values set according to those in recipesData.js
function RecipeFilter({ category, cuisine, onCategoryChange, onCuisineChange }) {
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
        </div>
    );
}

export default RecipeFilter