import { ADD_PRODUCT_BASKET } from "../actions/types";
import data from '../components/assets/cartItems.json'

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    items: data
}

export default (state = initialState,action) => {
    console.log("Reducers Called");
    switch(action.type) {
        case ADD_PRODUCT_BASKET: {
            const result = data.filter(item => { 
                if(item.id === action.payload.item.id) {
                    item.inCart = true;
                    item.quantity += 1;
                }
                return item.inCart === true;
            })
            console.log(result);

        return {
            basketNumbers: state.basketNumbers+1,
            items: result,
            cartCost: state.cartCost+action.payload.item.price
        }}
        default: return state;
    }
}