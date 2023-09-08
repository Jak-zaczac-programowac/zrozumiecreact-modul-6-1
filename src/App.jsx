import { useState } from "react";
import styles from "./App.module.css";
import { recipes } from "./data/recipes";
import { List } from "./components/List/List";
import { Cookbook } from "./components/Cookbook/Cookbook";
import { Recipe } from "./components/Recipe/Recipe";
import { RecipeContext } from "./context/RecipeContext";

function App() {
    const [selectedRecipeId, setSelectedRecipeId] = useState(1);

    const selectedRecipe = recipes.find(
        (recipe) => recipe.id === selectedRecipeId
    );

    return (
        <>
            <RecipeContext.Provider value={selectedRecipe}>
                <div className={styles.container}>
                    <List
                        recipes={recipes}
                        onSelectRecipe={(id) => setSelectedRecipeId(id)}
                    />
                    <Cookbook heading="Książka kucharska" />
                </div>
            </RecipeContext.Provider>
            <RecipeContext.Provider value={recipes[3]}>
                <div className={styles.promoted}>
                    <h2>Przepis tygodnia:</h2>
                    <Recipe />
                </div>
            </RecipeContext.Provider>
        </>
    );
}

export default App;
