import { ADD_TO_CART } from "./types";
import { INCREMENT } from "./types";
import { DECREMENT } from './types';
import { DELETE_FROM_CART } from "./types";
const initialState = {
  cartItems: [],
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case INCREMENT:
      return {
          ...state,
          cartItems :[...state.cartItems.return((item, i)=>{
              if(item == action.payload){
                return action.payload.quantity++;
              }else{
                  return item
              }
          })]
      };
      case DECREMENT:
      return {
          ...state,
          cartItems :[...state.cartItems.return((item, i)=>{
              if(item == action.payload){
                return action.payload.quantity--;
              }else{
                  return item
              }
          })]
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter((cartItems, i) => i !== action.payload),
        ],
      };

    default:
      return state;
  }
};
