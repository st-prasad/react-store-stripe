export const productsArray = [
    {
        id:"1",
        title: "coffee",
        price: 5,
    },
    {
        id:"2",
        title: "bread",
        price: 10,
    },
    {
        id:"3",
        title: "cake",
        price: 20,
    },
    {
        id:"4",
        title: "butter",
        price: 60,
    },
    {
        id:"5",
        title: "milk",
        price: 10,
    },
    {
        id:"6",
        title: "cheese",
        price: 20,
    },
];

// export const cartArray = [
//     {
//         id:"default",
//         title: "coffee",
//         price: 5,
//     },
// ];


// Once find method finds the result, it breaks the loop and returns it. forEach will continue cycling through the entire length

// only call this function after importing productsArray
export const productData = (id) => {
    let productData = productsArray.find(item => item.id === id);
    if (productData == undefined) {
        console.log("annot find this ptoduct. id = " +id);
    } else {
        return productData;
    }
}
