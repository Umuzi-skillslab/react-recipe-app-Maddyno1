import Button from "../components/UI/Button";
import MealPlanner from "../components/MealPlanner/MealPlanner";
import { recipesData } from "../data/recipesData";

function MealPlannerPage({ mealPlan, onAddMeal, onRemoveMeal, onClearWeek }) {
    return (
        <div className="page">
            <h1>Meal Planner</h1>
            <Button variant="danger" onClick={onClearWeek}>Clear Week</Button>
            <MealPlanner
                mealPlan={mealPlan}
                allRecipes={recipesData}
                onAddMeal={onAddMeal}
                onRemoveMeal={onRemoveMeal}
            />
        </div>
    );
}

export default MealPlannerPage;