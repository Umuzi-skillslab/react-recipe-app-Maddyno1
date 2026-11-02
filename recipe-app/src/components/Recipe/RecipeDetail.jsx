import { useParams, useNavigate } from "react-router-dom";
import { recipesData } from "../../data/recipesData";
import VideoPlayer from "../Media/VideoPlayer";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { formatCookTime } from "../../utils/helpers";
import styles from "./Recipe.module.css";

const toList = (value) => (Array.isArray(value) ? value : []);
const isPlainObject = (value) =>
    value !== null && typeof value === "object" && !Array.isArray(value);

//Accepts string[] OR [{ heading, item }] OR a mix of both
const normalizeSections = (value) => {
    const list = toList(value);
    if (!list.some(isPlainObject)) {
        return [{ heading: null, items: list.map(String) }];
    }
    return list.map((entry) =>
        isPlainObject(entry)
            ? { heading: entry.heading ?? null, items: toList(entry.items).map(String) }
            : { heading: null, items: [String(entry)] }
    );
};

const SectionList = ({ sections, ordered = false, emptyText }) => {
    const visible = sections.filter((section) => section.items.length > 0);
    if (visible.length === 0) return <p>{emptyText}</p>;

    const ListTag = ordered ? "ol" : "ul";
    return visible.map(({ heading, items }, sectionIndex) => (
        <div key={`${heading ?? "section"}-${sectionIndex}`}>
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
    const { id } = useParams();
    const navigate = useNavigate();

    const recipe = recipesData.find((r) => r.id === parseInt(id, 10));

    //Unknown ID
    if (!recipe) {
        return (
            <div className="page">
                <h1>Recipe not found</h1>
                <Button onClick={() => navigate("/recipes")}>Back to Recipes</Button>
            </div>
        );
    }

    //Badge colour according to difficulty
    const badgeColor =
        recipe.difficulty === "Easy" ? "#2e7d32" : recipe.difficulty === "Medium" ? "#f9a825" : "#c62828";

    return (
        <div className={`page ${styles.detail}`}>
            <Button variant="secondary" onClick={() => navigate("/recipes")}>Back to Recipes</Button>

            <h1>{recipe.title}</h1>
            <img className={styles.detailImage} src={recipe.image} alt={recipe.title} />
            <span className={styles.badge} style={{ backgroundColor: badgeColor }}>{recipe.difficulty}</span>
            <p>{formatCookTime(recipe.cookTime)} | Servings: {recipe.servings || 4} | {recipe.cuisine}</p>

            <Card title="Ingredients">
                <SectionList
                    sections={normalizeSections(recipe.ingredients)}
                    emptyText="No ingredients listed."
                />
            </Card>

            <Card title="Instructions">
                <SectionList
                    sections={normalizeSections(recipe.instructions)}
                    ordered
                    emptyText="No instructions listed."
                />
            </Card>

            <VideoPlayer videoUrl={recipe.videoUrl} title={`${recipe.title} - Tutorial`} />
        </div>
    );
};

export default RecipeDetail;