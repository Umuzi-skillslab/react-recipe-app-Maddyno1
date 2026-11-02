import DayCard from './DayCard';
import { DAYS } from '../../utils/helpers';
import styles from './MealPlanner.module.css';


const MealPlanner = ({ mealPlan, allRecipes,onAddMeal, onRemoveMeal }) => {
    return (
        <div className={styles.planner}>
            {DAYS.map(day => (
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
};

export default MealPlanner;