import PropTypes from "prop-types";

const RecipeCard = ({ recipe, isFavorite, onFavoriteToggle }) => {
    return (
        <div className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <p>Cook time: {recipe.cookTime} minutes</p>
            <Button
                variant={isFavorite ? 'danger' : 'secondary'}
                onClick={() => onFavoriteToggle(recipe.id)}
            >
                {isFavorite ? '❤️ Favorited' : '🤍 Favorite'}
            </Button>
        </div>
    );
}

RecipeCard.PropTypes = {
    recipe: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string,
        cookTime: PropTypes.number,
    }).isRequired,
    isFavorite: PropTypes.bool,
    onFavoriteToggle: PropTypes.func,
};

export default RecipeCard;