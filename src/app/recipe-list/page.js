import RecipeList from "@/components/recipe-list";

async function fetchListOfRecipes() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/recipes");
    const data = await apiResponse.json();

    return data?.recipes;
  } catch (e) {
    throw new Error(e);
  }
}

export default async function Recipes() {
  const recipeList = await fetchListOfRecipes();
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <RecipeList recipeList={recipeList} />
    </div>
  );
}
