import { useParams, useNavigate } from "react-router-dom";
import { recipesData } from "../../data/recipesData";
import VideoPlayer from "../Media/VideoPlayer";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { formatCookTime } from "../../utils/helpers";
import styles from "./Recipe.module.css";

const RecipeDetail = () => {
    const {id}=useParams();
    const navigate = useNavigate();

    const recipe = recipesData.find((r) => r.id === parseInt(id));

    //Error state
    if(!recipe){
        return(
        <div className="page">
            <h1>Recipe not found</h1>
            <Button onClick={() => navigate('/recipes')}>Back to Recipes</Button>
        </div>
        );
    }

    //Badge colour according to difficulty
    const badgeColor =
        recipe.difficulty === "Easy" ? "#2e7d32" : recipe.difficulty === "Medium" ? "#f9a825" : "#c62828";

    return (
        <div className={`page ${styles.detail}`}>
            <Button variant="secondary" onClick={() => navigate('/recipes')}>Back to Recipes</Button>

            <h1>{recipe.title}</h1>
            <img className={styles.detailImage} src={recipe.image} alt={recipe.title} />
            <span className={styles.badge} style={{ backgroundColor: badgeColor }}>{recipe.difficulty}</span>
            <p>{formatCookTime(recipe.cookTime)} | Servings: {recipe.servings || 4} | {recipe.cuisine}</p>

            <Card title="Ingredients">
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </Card>

            <Card title="Instructions">
                <ol>
                    {recipe.instructions.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </Card>

            <VideoPlayer videoUrl={recipe.videoUrl} title={`${recipe.title} - Tutorial`} />
        </div>
    );
};

export default RecipeDetail;