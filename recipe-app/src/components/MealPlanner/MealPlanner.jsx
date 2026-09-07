import DayCard from "./components/MealPlanner/DayCard";

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

function MealPlanner({ mealPlan, onAddMeal, }) {
    return (
        <div className="meal-planner">
            {days.map(day => (
                <DayCard
                    key={day}
                    day={day}
                    meals={mealPlan[day]}
                    onAddMeal={onAddMeal}
                />
            ))}
        </div>
    );
}

export default MealPlanner;