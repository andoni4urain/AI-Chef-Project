
function IngredientsList(props){

    const list = props.current.map(ingredient => <li key = {ingredient}>{ingredient}</li>)


    return(
        <section>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">{list}</ul>

                {/*Allows User to get a recipe once they add 4 ingredients*/}
                {props.current.length > 3 ? <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.showRecipe}>Get a recipe</button>
                </div> : null}
        </section>
    )
}

export default IngredientsList;