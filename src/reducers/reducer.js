let initionalState = [];
function AddToCart(state = initionalState,action)
{
    let data = action.data;
    console.log("state",state);
    switch(action.type)
    {
        case "Add_TO_CART":return [...state,data];
        case "REMOVE_FROM_CART":return state.filter((value)=>{return value.id !== data});
        default:return state;
    }
}
export default AddToCart;