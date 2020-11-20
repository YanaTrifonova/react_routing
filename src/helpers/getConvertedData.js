export function getConvertedData(data) {
    const drinks = data.data;
    let getCocktails = Object.keys(drinks).map((k) => drinks[k])[0];
    return Object.keys(getCocktails).map((k) => getCocktails[k]);
}