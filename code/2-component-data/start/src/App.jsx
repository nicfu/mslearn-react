import './index.css'
import React from 'react';
import RecipeTitle from './RecipeTitle'
import IngredientList from './IngredientList'
import RecipeSteps from './RecipeSteps'


function App() {
    // TODO: Add recipe object

    const recipe = {
        title: 'Mashed potatoes',
        feedback: {
            rating: 4.8,
            reviews: 20
        },
        ingredients: [
            { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: false },
            { name: 'Pepper', prepared: false }
        ],
        steps: [
            { step: 'Add cut potatoes to a pot of heavily salted water.' },
            { step: 'Bring pot to a boil.' },
            { step: 'Return potatoes to pot.' },
            { step: 'Add butter, cream, salt, and pepper to taste.' },
            { step: 'Mash potatoes.' },
            { step: 'Reseason and add butter and cream as desired.' }
        ]
    };

    return (
        <article>
            <h1>Recipe Manager</h1>
            {/* TODO: Add RecipeTitle component */}
            <RecipeTitle title={ recipe.title } feedback={recipe.feedback } />

            {/* TODO: Add IngredientList component */}
            <IngredientList ingredients={recipe.ingredients} />

            <RecipeSteps steps={recipe.steps} />

        </article>
    )
}

export default App;
