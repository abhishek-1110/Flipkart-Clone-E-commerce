
import * as actionType from '../constants/productConstant';

export const getelectronicsProductsReducer = (state = {electronicsproducts: [] }, action) => {
        switch(action.type) {
            case actionType.GET_PRODUCTS_SUCCESS:
                return {electronicsproducts: action.payload}
            case actionType.GET_PRODUCTS_FAIL:
                 return {error: action.payload}
            default:
                return state
        }
}

export const getelectronicsProductDetailsReducer = () => {

}