import RecipeCard from "./RecipeCard";
import styles from "./Recipe.module.css";

function RecipeList({ recipes, favorites = [], onFavoriteToggle }) {
    return (
        <div className={styles.grid}>
            {recipes.map(recipe => (
                <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    isFavorite={favorites.some(fav => fav.id === recipe.id)}
                    onFavoriteToggle={onFavoriteToggle}
                />
            ))}
        </div>
    );
}

export default RecipeList;