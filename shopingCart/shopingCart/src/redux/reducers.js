import { createSlice } from "@reduxjs/toolkit";
let productList = {
    products : [
        {
            id:1,
            name:"Sunflower-Oil",
            price:100,
            detail:"sun flower is yellow and contains the sunflower seeds and seeds of the sunflower"
        },
        {
          id: 2,
          name: "Apple",
          price: 50,
          detail: "Apples are a popular fruit known for their sweet taste and crisp texture."
        },
        {
          id: 3,
          name: "Orange Juice",
          price: 80,
          detail: "Orange juice is a liquid extract of the orange tree fruit, produced by squeezing or reaming oranges."
        },
        {
          id: 4,
          name: "Chicken Breast",
          price: 120,
          detail: "Chicken breast is a versatile and lean cut of poultry, commonly used in various recipes."
        },
        {
          id: 5,
          name: "Banana",
          price: 40,
          detail: "Bananas are elongated, edible fruits – botanically berries – produced by several kinds of large herbaceous flowering plants in the genus Musa."
        }
    ]
}

let productSlice = createSlice({
    name: "productList",
    initialState: productList,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload)
        }
    }
})

export const {addProduct} = productSlice.actions;
export default productSlice.reducer