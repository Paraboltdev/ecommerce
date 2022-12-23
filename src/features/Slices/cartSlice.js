import {createSlice} from '@reduxjs/toolkit'
import products from '../../productos'



const cartSlice = createSlice({
    name:'cart',
    initialState:{
    
        products,
        cart: [],
        
        totalAmount:0,
        totalQuantity:0,
    
        
    },
   
    reducers:{
        addToCart: (state,action)=>{
            let newItem = state.products.find((product) => product.id === action.payload);
            const itemInCart = state.cart.find((item)=> item.id === newItem.id)
               return itemInCart
              ? {
                  ...state,
                  cart: state.cart.map((item) =>
                    item.id === newItem.id
                      ? { ...item, quantity: item.quantity + 1 }
                      : item
                  ),
                }
              : {
                  ...state,
                  cart: [...state.cart, { ...newItem, quantity: 1 }],
                };


              // if(newItem){
              //   newItem.amount ++;
              //   newItem.totalPrice += action.payload.price
              //   newItem.totalAmount += action.payload.price
              // } else{

              //     state.cart.push({
              //       id:action.payload.id,
              //       name:action.payload.name,
              //       price:action.payload.price,
              //       description: action.payload.description,
              //       quantity:action.payload.quantity,
              //       amount:1
              //     })
              // }
              // if(ItemInCart){

              // }
              //  console.log(state.cart)
            },
            deleteOne:(state,action)=>{
              let itemToDelete = state.cart.find((item)=> item.id=== action.payload)

              return itemToDelete.quantity > 1
              ?{

              ...state,
              cart:state.cart.map((item)=> item.id === action.payload 
              ? {
                ...item, quantity:item.quantity -1
              }
              : item)
            }
            :{
              ...state,
              cart:state.cart.filter((item)=> item.id !== action.payload)
            }
            },
            deleteCart:(state,action)=>{
               return state
               
            },
            totalAmount:(state,action)=>{
              let { total, quantity } = state.cart.reduce(
                (cartTotal, cartItem) => {
                  const { price, quantity } = cartItem;
                  const itemTotal = price * quantity;

                  cartTotal.total += itemTotal
                  cartTotal.quantity += quantity

                  return cartTotal 
              
            },
            {
              total: 0,
              quantity: 0,
            }
          );
          total = parseFloat(total.toFixed(2));
          state.totalQuantity = quantity;
          state.totalAmount = total;
        },
           
            
    }
})

export const {addToCart, deleteOne,deleteCart,totalAmount}= cartSlice.actions;
export default cartSlice.reducer