import { useParams, useNavigate } from "react-router-dom";
import { recipesData } from "../../data/recipesData";
import VideoPlayer from "../Media/VideoPlayer";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { formatCookTime } from "../../utils/helpers";
import styles from "./Recipe.module.css";

//Readable title for the keyed instructions object (Samp and Beef Stew)
const INSTRUCTION_HEADINGS = {
    beefStew: "For The Beef Stew",
    samp: "For the Samp",
    serve: "To Serve",
};

// Ingredients: flat string[]  OR  [{ heading, items }]
const normalizeIngredients = (ingredients = []) => {
    const isGrouped = ingredients.length > 0 && typeof ingredients[0] === "object";
    return isGrouped
        ? ingredients
        : [{ heading: null, items: ingredients }];
};

// Instructions: flat string[]  OR  { key: string[] }
const normalizeInstructions = (instructions = []) =>
    Array.isArray(instructions)
        ? [{ heading: null, items: instructions }]
        : Object.entries(instructions).map(([key, items]) => ({
            heading: INSTRUCTION_HEADINGS[key] ?? key,
            items,
        }));

const SectionList = ({ sections, ordered = false }) => {
    const ListTag = ordered ? "ol" : "ul";
    return sections.map(({ heading, items }, sectionIndex) => (
        <div key={heading ?? sectionIndex}>
            {heading && <h4>{heading}</h4>}
            <ListTag>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ListTag>
        </div>
    ));
};

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
                <SectionList sections={normalizeIngredients(recipe.ingredients)} />
            </Card>

            <Card title="Instructions">
                <SectionList sections={normalizeInstructions(recipe.instructions)} ordered />
            </Card>

            <VideoPlayer videoUrl={recipe.videoUrl} title={`${recipe.title} - Tutorial`} />
        </div>
    );
};

export default RecipeDetail;