import { useState, useEffect } from 'react';
import { recipesData } from '../data/recipesData';
import SearchBar from '../components/UI/SearchBar';
import RecipeFilter from "../components/Recipe/RecipeFilter";
import RecipeList from '../components/Recipe/RecipeList';
import Loading from '../components/UI/Loading';
import styles from "../components/Recipe/Recipe.module.css";

const DIFFICULTY_ORDER = { Easy: 1, Medium: 2, Hard: 3 };

const RecipesPage = ({favorites, onFavoriteToggle }) => {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("all");
    const [cuisine, setCuisine] = useState("all");
    const [difficulty, setDifficulty] = useState("all");
    const [sortBy, setSortBy] = useState("default");
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
        .filter((r) => cuisine === "all" || r.cuisine === cuisine)
        .filter((r) => difficulty === "all" || r.difficulty === difficulty);

    const visibleRecipes = [...filteredRecipes].sort((a, b) => {
        if (sortBy === "title") return a.title.localeCompare(b.title);
        if (sortBy === "timeAsc") return a.cookTime - b.cookTime;
        if (sortBy === "timeDesc") return b.cookTime - a.cookTime;
        if (sortBy === "difficulty") return DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty];
        return 0;
    });

    const hasActiveFilters =
        searchTerm !== "" || category !== "all" || cuisine !== "all" ||
        difficulty !== "all" || sortBy !== "default";

    //Resets every control back to its starting value
    const handleClearFilters = () => {
        setSearchTerm("");
        setCategory("all");
        setCuisine("all");
        setDifficulty("all");
        setSortBy("default");
    };

    return (
        <div className="page">
            <h1>Recipes</h1>
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <RecipeFilter
                category={category}
                cuisine={cuisine}
                difficulty={difficulty}
                sortBy={sortBy}
                onCategoryChange={setCategory}
                onCuisineChange={setCuisine}
                onDifficultyChange={setDifficulty}
                onSortChange={setSortBy}
                onClear={handleClearFilters}
                hasActiveFilters={hasActiveFilters}
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
};

export default RecipesPage;