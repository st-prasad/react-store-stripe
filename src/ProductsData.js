export const productsArray = [
    //ids from stripe
    
    {
        id:"price_1Mw3KUGdMF0I3225bVRKNuGZ",
        title: "coffee",
        price: 200,
    },
    {
        id:"price_1Mw3OxGdMF0I3225hfbSYSbV",
        title: "bread",
        price: 300,
    },
    {
        id:"price_1Mw3QHGdMF0I3225pJ8jMsbY",
        title: "cake",
        price: 400,
    },
    {
        id:"price_1MxmurGdMF0I3225Ac68uzey",
        title: "butter",
        price: 500,
    },
    {
        id:"price_1MxmvQGdMF0I3225oamyDEMU",
        title: "milk",
        price: 800,
    },
    {
        id:"price_1Mxmw0GdMF0I32250YFtQRua",
        title: "cheese",
        price: 1500,
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
