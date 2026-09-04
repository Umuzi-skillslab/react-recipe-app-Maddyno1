import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import RecipesPage from './pages/RecipesPage'
import RecipeDetail from './components/Recipe/RecipeDetail'
import MealPlannerPage from './pages/MealPlannerPage'
import FavoritesPage from './pages/FavoritesPage'
import NotFound from './pages/NotFound'
import Navbar from './components/Navigation/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/meal-planner" element={<MealPlannerPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
