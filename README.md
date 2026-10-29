## 🔥THE FLAMING INFERNO🔥Recipe App
Welcome to my single-page recipe app, built with React and Vite. Users can browse a selection on the finest recipes sourced from sites like "The Preppy Chef", Ntsako T on YouTube and a few others. They can view the full recipe details, watch a YouTube tutorial, save their favorite and plan meals for the whole week.

THE FLAMING INFERNO: Scorching your tastebuds with unbelievable flavor!

## Features List:
1. Recipe catalog- 18 recipes for breakfast, lunch, dinner, dessert, and snacks, each with an image, cook time, difficulty level and servings
2. Search Bar- search for the recipe you're looking for using the title
3. Filter Bar- filter according to category and cuisine
4. Simulated loading state- simulated delay which shows a spinner
5. Recipe Detail page- shows an image of the dish, step-by-step instructions as well as an embedded video tutorial(Youtube links are embedded using iframe)
6. Favorites-heart button which allows you to favorite and unfavorite
7. Meal Planner- Monday to Sunday meal planning for three meals of the day
8. Responsive navigation- navbar collapses into hamburger menu
9. 404 page- for unmatched routes

## Technologies Used:
1. React
2. React Router DOM(BrowserRouter, nested routes, useParams, useNavigate, useLocation)
3. Proptypes
4. Vite
5. CSS Module
6. ESLint

## Component Architecture:
The app follows a pages to feature components to UI primitives structure:

Pages are route-level components. They own page-specific local state (e.g. search term, filters) and receive shared app state as props from App.jsx. Feature components are grouped by domain: Recipe(card, list, filter, detail), MealPlanner(weekly grid, day cards), Media(audio/video players), Navigation(navbar). UI primitives (components/UI/) are small, reusable, presentation-only pieces (Button, Card, Modal, Loading, SearchBar) used across pages and feature components. Card accepts an optional className so pages can adjust its layout.
Styling is done for each component with CSS Modules.

## Installation Instructions:
# Step 1:
Clone repo into your Vs Code

# Step 2:
In your terminal, navigate to the right file using "cd react-recipe-app-Maddyno1/recipe-app"

# Step 3:
In your terminal run "npm install" and then "npm start" OR "npm run dev"

## Project Structure:
The app follows a pages to feature components to UI primitives structure:

Pages are route-level components. They own page-specific local state (e.g. search term, filters) and receive shared app state as props from App.jsx. 
Feature components are grouped by domain: Recipe(card, list, filter, detail), MealPlanner(weekly grid, day cards), Media(audio/video players), Navigation(navbar). 
UI primitives (components/UI/) are small, reusable, presentation-only pieces (Button, Card, Modal, Loading, SearchBar) used across pages and feature components. Card accepts an optional className so pages can adjust its layout.
Styling is done for each component with CSS Modules.

![Project Structure](screenshots/structureS.png)

## Component Descriptions:
Navbar
Top navigation bar with links to all pages, a live favorites counter, and a collapsible mobile menu.

RecipeCard
Displays a single recipe's image, title (linked to its detail page), difficulty/time/servings, and a favorite toggle button.

RecipeList
Renders a responsive grid of RecipeCards from a list of recipes.

RecipeFilter
Two <select> dropdowns for filtering by category and cuisine.

RecipeDetail
Full detail view for one recipe — ingredients, instructions, difficulty badge, and embedded video tutorial. Looked up by id from the URL.

MealPlanner
Renders one DayCard per day of the week.

DayCard
Shows breakfast/lunch/dinner slots for a single day; opens a Modal to assign a recipe to an empty slot, or remove a filled one.

AudioPlayerRenders an HTML5 <audio> element with an optional cover image and title, used on the Home page's "Cooking Tip of the Day" card.

VideoPlayer
Renders a YouTube iframe embed when given a YouTube URL, or a native <video> element for direct video files. Used on RecipeDetail.

Button
Reusable button with primary/secondary/danger style variants.

CardGeneric bordered container with an optional title and className, used to group content.

Modal
Overlay dialog with a backdrop-click-to-close and an explicit close button.

Loading
Spinner + message shown while recipes are "loading".

SearchBar
Controlled text input with a submit button for the recipe search. 


## State Management:
State is managed with React's built-in useState/useEffect and passed down via props.

## Routing:
Built with react-router-dom v7 using BrowserRouter, all declared in App.jsx.
Home: Landing page with intro text and a "Cooking Tip" audio card.
RecipesPage: Full recipe catalog with search + filters.
RecipesDetail: Detail view for one recipe, matched by numeric id.
MealPlannerPage: Weekly meal planner grid.
FavoritesPage: List of favorited recipes (or an empty-state message).
NotFound: Catch-all 404 page.

## Future Enhancements:
Generate a shopping list from a week's meal plan.
Add drag-and-drop for assigning recipes in the meal planner instead of the modal picker.
Add pagination or infinite scroll for larger recipe catalogs.
Add a dark mode toggle.

## Screenshots:
Home page
![Home page](screenshots/homeS.png)
![Recipes page with filters](screenshots/recipesS.png)
![Recipe detail page with video](screenshots/detailsS.png)
![Meal planner page](screenshots/mealplannerS.png)
![Favorites page](screenshots/favoritesS.png)
![Mobile responsive view](screenshots/hamburgerS.png)
![Mobile responsive view](screenshots/responsiveviewS.png)
