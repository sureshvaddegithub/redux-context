
import * as action from "../actions/actionTypes"
// import { fetchProductSuccess } from "../actions/productActions"

const Initial_state = {
    loading : false,
    data : [],
    error : ''
}

function productReducer(state = Initial_state , actions){
   
    switch(actions.type){
        case action.FETCH_PRODUCT_REQUEST : 
             return {...state , loading : true}
        case action.FETCH_PRODUCT_SUCCESS :
            return {...state , loading : false , data : actions.payload}
        case action.FETCH_PRODUCT_FAILURE : 
            return {...state , loading : false , data : [] , error : actions.payload}
        default : 
          return {...state}
    }
}

export default productReducer