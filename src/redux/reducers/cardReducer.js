import * as action from "../actions/actionTypes"
import { Navigate } from 'react-router-dom'

const Initial_state = [];


function cardReducer(state = Initial_state,actions){
    switch(actions.type){
        case action.ADD_TO_CARD :
           
            for(let i = 0;i<state.length;i++){
                if(state[i].id === actions.payload.id)
                 return state ;
            }
            state.push(actions.payload)
            return state;
       
         case action.REMOVE_FROM_CARD : 
                return state.filter(item => item.id !== actions.payload.id);
        
        case action.CHECKOUT :
            alert("items are purchased")
            state=[];
    
            return state;
        
        default :
            return state;
    } 
}


export default cardReducer