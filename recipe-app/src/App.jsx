import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RecipesPage from './pages/RecipesPage'
import RecipeDetail from './components/Recipe/RecipeDetail'
import MealPlannerPage from './pages/MealPlannerPage'
import FavoritesPage from './pages/FavoritesPage'
import NotFound from './pages/NotFound'
import Navbar from './components/Navigation/Navbar'

function App() {
  const [favorites, setFavorites] = useState([])
  const [mealPlan, setMealPlan] = useState({
    monday: { breakfast: null, lunch: null, dinner: null },
    tuesday: { breakfast: null, lunch: null, dinner: null },
    wednesday: { breakfast: null, lunch: null, dinner: null },
    thursday: { breakfast: null, lunch: null, dinner: null },
    friday: { breakfast: null, lunch: null, dinner: null },
    saturday: { breakfast: null, lunch: null, dinner: null },
    sunday: { breakfast: null, lunch: null, dinner: null },
  });

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const savedMealPlan = localStorage.getItem('mealPlan');
    if (savedMealPlan) setFavorites(JSON.parse(savedMealPlan));
  }, []);

  useEffect(() => {
    localStorage.setItem('mealPlan', JSON.stringify(mealPlan));
  }, [mealPlan]);

  const handleFavoriteToggle = (recipe) => {
    setFavorites(prev =>
      prev.some(f => f.id === recipe.id)
        ? prev.filter(f => f.id !== recipe.id)
        : [...prev, recipe]
    );
  };

  const handleAddMeal = (day, slot, recipe) => {
    setMealPlan(prev => ({
      ...prev,
      [day]: { ...prev[day], [slot]: recipe }
    }));
  };

  const handleClearWeek = () => {
    setMealPlan({
      monday: { breakfast: null, lunch: null, dinner: null },
    tuesday: { breakfast: null, lunch: null, dinner: null },
    wednesday: { breakfast: null, lunch: null, dinner: null },
    thursday: { breakfast: null, lunch: null, dinner: null },
    friday: { breakfast: null, lunch: null, dinner: null },
    saturday: { breakfast: null, lunch: null, dinner: null },
    sunday: { breakfast: null, lunch: null, dinner: null },
    });
  };

  return (
    <BrowserRouter>
      <Navbar favoritesCount={favorites.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipesPage favorites={favorites} onFavoriteToggle={handleFavoriteToggle} />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/meal-planner" element={<MealPlannerPage mealPlan={mealPlan} onAddMeal={handleAddMeal} onClearWeek={handleClearWeek} />} />
        <Route path="/favorites" element={<FavoritesPage favorites={favorites} onFavoriteToggle={handleFavoriteToggle} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App
