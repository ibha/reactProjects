import { ADD_PRODUCT_BASKET } from './types'

export const addBasket = () => {
    console.log("addBasket called");
    return {
            type: ADD_PRODUCT_BASKET
        }
}