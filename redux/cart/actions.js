import {ADD_TO_CART} from "./types";
import {INCREMENT} from "./types";
import {DECREMENT} from "./types";
import {DELETE_FROM_CART} from "./types";

export const addToCartAction =(payload)=>{
    return{
        type: ADD_TO_CART,
        payload
    }
}   
export const incrementAction =(payload)=>{
    return{
        type: INCREMENT,
        payload
    }
} 
export const decrementAction =(payload)=>{
    return{
        type: DECREMENT,
        payload
    }
} 
export const deleteAction =(payload)=>{
    return{
        type: DELETE_FROM_CART,
        payload
    }
} 