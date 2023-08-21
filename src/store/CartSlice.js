import { createSlice } from "@reduxjs/toolkit";

const initialState=[]

// cartSlice return two things first is action and second is reducer
const cartSlice= createSlice({
    name:'cart',
    initialState,
    reducers:{
    add(state,action){
        state.push(action.payload)
    },
    remove(state,action){
        return state.filter(item=>item.id!==action.payload)
    }

    }
    
})
export const {add,remove}= cartSlice.actions // actions gives the function like add
export default cartSlice.reducer  // reducers gives the state