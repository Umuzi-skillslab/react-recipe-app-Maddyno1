import { useParams, useNavigate } from "react-router-dom";
import { recipesData } from "../../data/recipesData";
import VideoPlayer from "../Media/VideoPlayer";

const RecipeDetail = () => {
    const {id}=useParams();
    const navigate = useNavigate();

    const recipe = recipesData.find((r) => r.id === parseInt(id));

    if(!recipe){
        return(
        <div>
            <p>Recipe not found</p>
            <button onClick={() => navigate('/recipes')}>Back to Recipes</button>
        </div>
        );
    }

    return (
        <div className="recipe-detail">
            <button onClick={() => navigate('/recipes')}>Back to Recipes</button>

            <h1>{recipe.title}</h1>
            <p>Total cook time: {recipe.cookTime} minutes | Servings: {recipe.servings || 4}</p>

            <h2>Ingredients</h2>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredients}</li>
                ))}
            </ul>

            <h2>Instructions</h2>
            <ol>
                {recipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>

            <VideoPlayer videoUrl={recipe.videoUrl} title={`${recipe.title} - Tutorial`} />
        </div>
    );
};

export default RecipeDetail