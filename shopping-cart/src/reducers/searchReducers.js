import { SEARCH_PRODUCTS } from "../actions/types"

const initialState = {
    searchTerm: ""
}


export default (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case SEARCH_PRODUCTS: return {
            searchTerm: action.payload
        }
        default: return ""
    }
}