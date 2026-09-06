import RecipeCard from "./RecipeCard";


function RecipeList({ recipes, favorites, onFavoriteToggle }) {
    if (recipes.length === 0) {
        return <p>No recipes found.</p>;
    }

    return (
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    isFavorite={favorites.some((fav) => fav.id === recipe.id)}
                    onFavoriteToggle={onFavoriteToggle}
                />
            ))}
        </div>
    );
}

export default RecipeList;