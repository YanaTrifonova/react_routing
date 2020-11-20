export function getIngredients(data) {
    console.log("getIngredients");
    let arr = [];
    let i = 0;

    if (data.strIngredient1 !== null) {
        arr[i] = data.strIngredient1;
        i++;
    }
    if (data.strIngredient2 !== null) {
        arr[i] = data.strIngredient2;
        i++;
    }
    if (data.strIngredient3 !== null) {
        arr[i] = data.strIngredient3;
        i++;
    }
    if (data.strIngredient4 !== null) {
        arr[i] = data.strIngredient4;
        i++;
    }
    if (data.strIngredient5 !== null) {
        arr[i] = data.strIngredient5;
        i++;
    }
    if (data.strIngredient6 !== null) {
        arr[i] = data.strIngredient6;
        i++;
    }
    if (data.strIngredient7 !== null) {
        arr[i] = data.strIngredient7;
        i++;
    }
    if (data.strIngredient8 !== null) {
        arr[i] = data.strIngredient8;
        i++;
    }
    if (data.strIngredient9 !== null) {
        arr[i] = data.strIngredient9;
        i++;
    }
    if (data.strIngredient10 !== null) {
        arr[i] = data.strIngredient10;
        i++;
    }
    if (data.strIngredient11 !== null) {
        arr[i] = data.strIngredient12;
        i++;
    }
    if (data.strIngredient13 !== null) {
        arr[i] = data.strIngredient13;
        i++;
    }
    if (data.strIngredient14 !== null) {
        arr[i] = data.strIngredient14;
        i++;
    }
    if (data.strIngredient15 !== null) {
        arr[i] = data.strIngredient15;
        i++;
    }
    return arr;
}