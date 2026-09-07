import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import styles from "./MealPlanner.module.css";

const SLOTS = ['breakfast', 'lunch', 'dinner'];

//Each meal slot is color-coded
const SLOT_COLORS = {breakfast: '#e67e22', lunch: '#2980b9', dinner: '#8e44ad'};

function DayCard({ day, meals, allRecipes = [], onAddMeal, onRemoveMeal }) {

    const [modalSlot, setModalSlot] =useState(null);

    return (
        <div className={styles.dayCard}>
            <h3 className={styles.dayTitle}>{day}</h3>

            {SLOTS.map(slot => (
                <div key={slot} className={meals[slot] ? styles.slotFilled : styles.slotEmpty}>
                    <span className={styles.slotLabel} style={{ color: SLOT_COLORS[slot] }}>{slot}</span>

                    {meals[slot] ? (
                        <div className={styles.slotContent}>
                            <p>{meals[slot].title}</p>
                            <Button variant="danger" onClick={() => onRemoveMeal(day, slot)}>✕</Button>
                        </div>
                    ) : (
                        <Button onClick={() => setModalSlot(slot)}>+ Add {slot}</Button>
                    )}
                </div>
            ))}

            {modalSlot && (
                <Modal onClose={() => setModalSlot(null)}>
                    <h4>Choose a recipe for {modalSlot}</h4>
                    {allRecipes.map(recipe => (
                        <button
                            key={recipe.id}
                            className={styles.recipeChoice}
                            onClick={() => {
                                onAddMeal(day, modalSlot, recipe);
                                setModalSlot(null);
                            }}
                        >
                            {recipe.title}
                        </button>
                    ))}
                </Modal>
            )}
        </div>
    );
}

DayCard.propTypes = {
    day: PropTypes
}

export default DayCard