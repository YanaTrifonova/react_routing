export function getRandomData(randomId, getCocktailsToArray) {
    return getCocktailsToArray.filter((cocktail) => cocktail.idDrink === randomId.toString());
}