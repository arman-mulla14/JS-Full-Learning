const food1 = "Pizza";
const food2 = "Burger";
const food3 = "Pasta";
const food4 = "Sushi";

function order(...foods){
    console.log(...foods.join(","));
}


function get(...foods){ 
    return foods;

}
//order(food1, food2, food3, food4);

const foods = get(food1, food2, food3, food4);
console.log(foods);





function sum(...numbers){ 
    let result = 0;
    for(let number of numbers){
        result += number; 
    }
    return result;
}

const result = sum(1,2,3,4,5);
console.log(result);

