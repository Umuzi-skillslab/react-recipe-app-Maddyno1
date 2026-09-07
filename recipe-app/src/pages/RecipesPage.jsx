import { useState, useEffect } from 'react';
import { recipesData } from '../data/recipesData';
import SearchBar from '../components/UI/SearchBar';
import RecipeList from '../components/Recipe/RecipeList';
import Loading from '..components/UI/Loading';

function RecipesPage({favorites, onFavoriteToggle }) {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setRecipes(recipesData);
            setIsLoading(false);
        }, 500);
        
    }, []);

    const filteredRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return isLoading ? (
        <Loading/>
    ) : (
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