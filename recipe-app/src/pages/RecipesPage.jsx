import { useState, useEffect } from 'react';
import { recipesData } from '../data/recipesData';
import SearchBar from '../components/UI/SearchBar';
import RecipeList from '../components/Recipe/RecipeList';

function RecipesPage({favorites, onFavoriteToggle }) {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setRecipes(recipesData);
    }, []);

    const filteredRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <RecipeList
                recipes={filteredRecipes}
                favorites={favorites}
                onFavoriteToggle={onFavoriteToggle}
            />
        </div>
    );
}

export default RecipesPage;