const myNums = [1, 2, 3];

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// },0)

const myTotal = myNums.reduce( (acc, curr) => acc + curr , 0)

console.log(myTotal);



const myShoppingCart = [
    {
        itemName: 'Apples',
        price: 1000,
        quantity: 5
    },
    {
        itemName: 'Mangos',
        price: 1200,
        quantity: 5
    },
    {
        itemName: 'Pinapples',
        price: 2000,
        quantity: 5
    },
    {
        itemName: 'Oranges',
        price: 500,
        quantity: 5
    },
]

const pricetoPay = myShoppingCart.reduce( (acc, item) => acc + item.price , 0)

console.log(pricetoPay);