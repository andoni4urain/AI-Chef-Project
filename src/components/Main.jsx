import { useState } from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromChefClaude } from "../../ai";

function Main(){

    const [current, addIngredient] = useState([]);
    
    const [recipe, setRecipe] = useState("");

    function submitIngredient(formData){
        const newIngredient = formData.get("ingredient");
        addIngredient((prevCurrent) => [...prevCurrent, newIngredient]); //...prevCurrent is restating the old list, object
    }

    async function showRecipe(){
        const ClaudeResponse = await getRecipeFromChefClaude(current)
        setRecipe(ClaudeResponse)
    }

    return(
        <main>
            <form action={submitIngredient} className="main-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {current.length === 0 ? <h2 className="instructions">Welcome to Chef Claude! Begin by adding ingredients to then generate a recipe!</h2> : null}

            {current.length > 0 && <IngredientsList current={current} showRecipe={showRecipe}/>}
            
            {recipe ? <ClaudeRecipe recipe={recipe} /> : null}
        </main>
    )
}

export default Main;