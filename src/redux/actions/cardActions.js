import * as action from "./actionTypes"


export const addToCard = (product)=>{
    return{
        type : action.ADD_TO_CARD,
        payload : product
    }
}

export const removeFromCard = (productId)=>{
  return{
    type : action.REMOVE_FROM_CARD,
    payload : productId
  }
}

export const checkout = ()=>{
    return {
        type : action.CHECKOUT
    }
}