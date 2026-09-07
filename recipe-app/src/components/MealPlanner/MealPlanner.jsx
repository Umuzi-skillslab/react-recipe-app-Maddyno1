import DayCard from "./DayCard";
import styles from "./MealPlanner.module.css";

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

function MealPlanner({ mealPlan, allRecipes,onAddMeal, onRemoveMeal }) {
    return (
        <div className={styles.planner}>
            {days.map(day => (
                <DayCard
                    key={day}
                    day={day}
                    meals={mealPlan[day]}
                    allRecipes={allRecipes}
                    onAddMeal={onAddMeal}
                    onRemoveMeal={onRemoveMeal}
                />
            ))}
        </div>
    );
}

export default MealPlanner;