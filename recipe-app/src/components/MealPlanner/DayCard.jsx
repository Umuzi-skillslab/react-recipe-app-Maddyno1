import { useState } from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";

function DayCard({ day, meals, onAddMeal, onRemoveMeal }) {

    const [modalSlot, setModalSlot] =useState(null);
    const openModalFor = (day, slot) => setModalSlot(slot);

    return (
        <div className="day-card">
            <h3>{day}</h3>
            {meals.breakfast ? (
                <p>
                    {meals.breakfast.title}
                    <Button onClick={() => onRemoveMeal(day, 'breakfast')}>Remove</Button>
                </p>
            ) : (
                <Button onClick={() => openModalFor(day, 'breakfast')}>Add Breakfast</Button>
            )}

            {meals.lunch ? (
                <p>
                    {meals.lunch.title}
                    <Button onClick={() => onRemoveMeal(day, 'lunch')}>Remove</Button>
                </p>
            ) : (
                <Button onClick={() => openModalFor(day, 'lunch')}>Add Lunch</Button>
            )}

            {meals.dinner ? (
                <p>
                    {meals.dinner.title}
                    <Button onClick={() => onRemoveMeal(day, 'dinner')}>Remove</Button>
                </p>
            ) : (
                <Button onClick={() => openModalFor(day, 'dinner')}>Add Dinner</Button>
            )}

            {modalSlot && (
                <Modal onClose={() => setModalSlot(null)}>
                    <h4>Choose a recipe for {modalSlot}</h4>
                    {allRecipes.map(recipe => (
                        <button
                            key={recipe.id}
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
