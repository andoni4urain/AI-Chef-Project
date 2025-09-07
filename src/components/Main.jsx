import { useState } from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromChefClaude } from "../../ai";

function Main(){

    //Initialize state for Ingredients list and recipe
    const [current, addIngredient] = useState([]);
    const [recipe, setRecipe] = useState("");

    //Adds an ingredient to the list
    function submitIngredient(formData){
        const newIngredient = formData.get("ingredient");
        addIngredient((prevCurrent) => [...prevCurrent, newIngredient]); //...prevCurrent is restating the old list, object
    }

    //Gets AI response
    async function showRecipe(){
        const ClaudeResponse = await getRecipeFromChefClaude(current)
        setRecipe(ClaudeResponse)
    }

    return(
        <main>
            {/*Ingredient Submission Form*/}
            <form action={submitIngredient} className="main-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {/*Instructions are only displayed when theres no ingredients added*/}
            {current.length === 0 ? <h2 className="instructions">Welcome to Chef Claude! Begin by adding ingredients to then generate a recipe!</h2> : null}

            {/*Display IngredientsList*/}
            {current.length > 0 && <IngredientsList current={current} showRecipe={showRecipe}/>}
            
            {/*Display Recipe*/}
            {recipe ? <ClaudeRecipe recipe={recipe} /> : null}
        </main>
    )
}

export default Main;