import RecipeList from "../components/Recipe/RecipeList";

function FavoritesPage({favorites, onFavoriteToggle }) {
    return (
        //Wrapped content in div for consistent spacing
        <div className="page">
            <h1>Favorites Page</h1>
            {favorites.length > 0 ? (
                <RecipeList
                    recipes={favorites}
                    favorites={favorites}
                    onFavoriteToggle={onFavoriteToggle}
                />
            ) : (
                <p>No favorites yet - start adding recipes!</p>
            )}
        </div>
    );
}

export default FavoritesPage;