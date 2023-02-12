export const Add_TO_CART = (productData) => {
    return {
        type:'Add_TO_CART',
        data:productData
    }
}
export const REMOVE_FROM_CART = (id) => {
    console.log(id);
    return {
        type:'REMOVE_FROM_CART',
        data:id
    }
}
