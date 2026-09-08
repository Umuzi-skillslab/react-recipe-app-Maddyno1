import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { formatCookTime } from "../../utils/helpers";
import styles from "./Recipe.module.css";

const RecipeCard = ({ recipe, isFavorite, onFavoriteToggle }) => {
    return (
        //Tints the card backround when favorited
        <div 
            className={`${styles.card} ${isFavorite ? styles.favorite : ""}`}
            style={{backgroundColor: isFavorite ? "#efe2e2" : "#ffffff"}}
        >
            <img className={styles.image} src={recipe.image} alt={recipe.title} />
            <h3><Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link></h3>
            <p className={styles.meta}>
                {recipe.difficulty === "easy" ? "🟢" : recipe.difficulty === "medium" ? "🟡" : "🔴"}{" "}
                {formatCookTime(recipe.cookTime) } | Serves {recipe.servings || 4}
            </p>
            <Button
                variant={isFavorite ? "danger" : "secondary"}
                onClick={() => onFavoriteToggle(recipe)}
            >
                {isFavorite ? "❤️ Favorited" : "🤍 Favorite"}
            </Button>
        </div>
    );
};

RecipeCard.propTypes = {
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