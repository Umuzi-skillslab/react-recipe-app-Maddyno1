import { useParams, useNavigate } from "react-router-dom"

const RecipeDetail = () => {
    const {id}=useParams();
    const navigate = useNavigate();

    const recipe = recipesData.find(r=>r.id === parseInt(id));

    if(!recipe){
        return<div>Recipe not found</div>;
    }

    return(
        <div>
            <button onClick={() => navigate('recipes')}>Back to Recipes</button>
            <h1>{recipe.title}</h1>
            {/*Recipe details*/}
        </div>
    );
};

export default RecipeDetail