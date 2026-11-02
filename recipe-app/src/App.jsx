import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipesPage from './pages/RecipesPage';
import RecipeDetail from './components/Recipe/RecipeDetail';
import MealPlannerPage from './pages/MealPlannerPage';
import FavoritesPage from './pages/FavoritesPage';
import NotFound from './pages/NotFound';
import Navbar from './components/Navigation/Navbar';
import { DAYS } from './utils/helpers';

const createEmptyMealPlan = () =>
  Object.fromEntries(
    DAYS.map(day => [day, { breakfast: null, lunch: null, dinner: null }])
  );

const isPlainObject = (value) =>
  value !== null && typeof value === 'object' && !Array.isArray(value);

const loadFromStorage = (key, fallback, isValid) => {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    const parsed = JSON.parse(raw);
    return isValid(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
};

const saveToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage full or blocked. The app still works without saving.
  }
};

const App = () => {
  const [favorites, setFavorites] = useState(() =>
    loadFromStorage('favorites', [], Array.isArray)
  );

  const [mealPlan, setMealPlan] = useState(() => {
    const saved = loadFromStorage('mealPlan', null, isPlainObject);
    const empty = createEmptyMealPlan();
    if (!saved) return empty;

    return Object.fromEntries(
      DAYS.map(day => [
        day,
        { ...empty[day], ...(isPlainObject(saved[day]) ? saved[day] : {}) },
      ])
    );
  });

  useEffect(() => {
    saveToStorage('favorites', favorites);
  }, [favorites]);

  useEffect(() => {
    saveToStorage('mealPlan', mealPlan);
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

  //Sets the slot back to null
  const handleRemoveMeal = (day, slot) => {
    setMealPlan(prev => ({
      ...prev,
      [day]: { ...prev[day], [slot]: null },
    }));
  };

  const handleClearWeek = () => {
    setMealPlan(createEmptyMealPlan());
  };

  return (
    <BrowserRouter>
      <Navbar favoritesCount={favorites.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipesPage favorites={favorites} onFavoriteToggle={handleFavoriteToggle} />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/meal-planner" element={<MealPlannerPage mealPlan={mealPlan} onAddMeal={handleAddMeal} onRemoveMeal={handleRemoveMeal} onClearWeek={handleClearWeek} />} />
        <Route path="/favorites" element={<FavoritesPage favorites={favorites} onFavoriteToggle={handleFavoriteToggle} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
