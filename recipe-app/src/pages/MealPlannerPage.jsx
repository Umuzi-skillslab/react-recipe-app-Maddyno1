import Button from "../components/UI/Button";

function MealPlannerPage({ mealPlan, onAddMeal, onClearWeek }) {
    return (
        <div>
            <h1>Meal Planner</h1>
            <Button onClick={onClearWeek}>Clear Week</Button>
            <MealPlanner mealPlan={mealPlan} onAddMeal={onAddMeal} />
        </div>
    );
}

export default MealPlannerPage;