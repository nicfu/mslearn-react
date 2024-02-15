import React from 'react';

function RecipeSteps(props) {
    // Create the list items using map
    const steps = props.steps.map((step, index) => {
        return (
            // Return the desired HTML for each ingredient
            <li key={index}>
                { step.step }
            </li>
        );
    });

    // return the HTML for the component
    // ingredientListItems will be rendered as li elements
    return (
        <ol>
            { steps }
        </ol>
    );
}

export default RecipeSteps;