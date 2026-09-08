import { useState, useEffect } from 'react';
import { recipesData } from '../data/recipesData';
import SearchBar from '../components/UI/SearchBar';
import RecipeFilter from "../components/Recipe/RecipeFilter";
import RecipeList from '../components/Recipe/RecipeList';
import Loading from '../components/UI/Loading';
import styles from "../components/Recipe/Recipe.module.css";

function RecipesPage({favorites, onFavoriteToggle }) {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("all");
    const [cuisine, setCuisine] = useState("all");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //setTimer simulates a fetch so the Loading state is visible
        const timer = setTimeout(() => {
            setRecipes(recipesData);
            setIsLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    //Each filter pass narrows the array before it reaches RecipeList
    const filteredRecipes = recipes
        .filter((r) => r.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter((r) => category === "all" || r.category === category)
        .filter((r) => cuisine === "all" || r.cuisine === cuisine);

    return (
        <div className="page">
            <h1>Recipes</h1>
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <RecipeFilter
                category={category}
                cuisine={cuisine}
                onCategoryChange={setCategory}
                onCuisineChange={setCuisine}
            />

            {isLoading ? (
                <Loading />
            ) : (
                <>
                    {filteredRecipes.length === 0 && (
                        <p className={styles.noResults}>No recipes match your search or filters.</p>
                    )}
                    <RecipeList
                        recipes={filteredRecipes}
                        favorites={favorites}
                        onFavoriteToggle={onFavoriteToggle}
                    />
                </>
            )}
        </div>
    );
}

export default RecipesPage;