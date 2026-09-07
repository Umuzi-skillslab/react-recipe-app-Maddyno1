const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

function MealPlanner({ mealPlan, onAddMeal, onRemoveMeal, allRecipes }) {
    return (
        <div className="meal-planner">
            {days.map(day => (
                <DayCard
                    key={day}
                    day={day}
                    meals={mealPlan[day]}
                    onAddMeal={onAddMeal}
                    onRemoveMeal={onRemoveMeal}
                    allRecipes={allRecipes}
                />
            ))}
        </div>
    );
}