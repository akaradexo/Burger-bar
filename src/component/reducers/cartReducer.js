import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import Item7 from '../../images/item7.jpg'
import Item8 from '../../images/item8.jpg'
import Item9 from '../../images/item9.jpg'
import Item10 from '../../images/item10.jpg'
import '../../App.css'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1,title:'Cheese Avalance Burger', desc: "Cheesiest veg burger on the menu, a classic veg burger, with lettuce, tomato slices, caramlised onions, served with cheese sauce 75ml.", price:110,img:Item1},
        {id:2,title:'Endgame Burger', desc: "Double american patty, grilled paneer sticks, double cheese slice, sauteed mushrooms and bell peppers, chipotle sriracha mayo, jalapenos, paprika, bbq sauce, mustard, ketchup, served with cheese sauce 75ml.", price:80,img: Item2},
        {id:3,title:'Jucy Lucy', desc: "The most popular veg burger on the menu, the patty is stuffed with cheese instead of putting it on the top, making the core filled with cheddar cheese.",price:120,img: Item3},
        {id:4,title:'Nacho Cheese Burger', desc: "Fried patty made full of secret blend of cheese, fried to perfection, iceberg lettuce, tomato slices, secret sauce, mustard and ketchup.", price:260,img:Item4},
        {id:5,title:"Mac 'n' Cheese Burger", desc: "Fresh grilled american veg patty topped with cheddar cheese slice, toasted buns, icerberg lettuce, red chimichurri mayo (herbs, parselay, red chilli and garlic aioli), topped with red paprika slices.", price:160,img: Item5},
        {id:6,title:'Cheese Fondue Burger', desc: "Fresh grilled american veg patty topped with cheddar cheese slice, toasted buns, icerberg lettuce, roasted garlic mayo, black olives.",price:90,img: Item6},
        {id:7,title:'Cheese Injector Burger', desc: "Thinner than usual, patty is smashed with cooking, easy to eat, tandoori version.",price:120,img: Item7},
        {id:8,title:'Boogeyman Burger', desc: "Spiciest veg burger on the menu, fiery mayo, jalapenos, red paprika, served with spicy hot sauce 50ml.", price:260,img:Item8},
        {id:9,title:'Pizza on Top Burger', desc: "Its a burger, its a pizza, this burger has top looking like a pizza, giving that extra cheese feeling, tandoori version.", price:160,img: Item9},
        {id:10,title:'Deconstructed English Breakfast Burger', desc: "Thinner than usual, patty is smashed with cooking, easy to eat.",price:90,img: Item10}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 10
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 10
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
