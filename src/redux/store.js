

import {createStore , applyMiddleware , combineReducers} from "redux"
import productReducer from "./reducers/productReducer"
import cardReducer from "./reducers/cardReducer"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    products : productReducer,
    carditems : cardReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;