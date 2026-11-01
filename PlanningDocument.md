## 1. Component Hierarchy
![Components hierarchy](screenshots/componentHierarchy.png)

## 2. Data Flow Diagram
![Data Flow Diagram](screenshots/dataFlowDiagram.png)

## 3. Components and purposes
# Pages:
Home (intro and audio tip), RecipesPage (search, filters, catalog), RecipeDetail (full recipe), MealPlannerPage, FavoritesPage, NotFound (404)

# Recipe:
RecipeList (grid), RecipeCard (summary and favorite button), RecipeFilter (category and cuisine selects)

# MealPlanner:
MealPlanner (weekly grid), DayCard (one day, reused ×7)

# Media:
VideoPlayer (YouTube embed or video), AudioPlayer (cooking tip)

# UI (reusable):
Button, Card, SearchBar, Loading, Modal
Navigation: Navbar (links, active state, favorites count, hamburger menu)

## 4. Props flow
# favorites, onFavoriteToggle:
App → RecipesPage → RecipeList → RecipeCard. recipes comes from recipesData.js in RecipesPage.

# mealPlan, onAddMeal, onRemoveMeal, onClearWeek:
App → MealPlannerPage → MealPlanner. DayCard then receives day, meals and allRecipes.

# searchTerm, onSearchChange:
RecipesPage → SearchBar.

# Card and Modal:
Accept children.

# RecipeCard, DayCard, Button, SearchBar, and RecipeFilter:
Use PropTypes.
DayCard has the default allRecipes = [].