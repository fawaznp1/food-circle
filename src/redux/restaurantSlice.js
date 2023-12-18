import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRestaurant = createAsyncThunk("restaurant/fetchRestaurant",()=>{
    const result=axios.get('./restaurant.json').then(response=>response.data.restaurants)
    console.log(result);
    return result
})


const restaurantSlice=createSlice({
    name:"restaurant",
    initialState:{
        loading:false ,//pending state
        allRestaurant:[],//resolve state
        searchRestaurant:[],
        error:''//reject state
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRestaurant.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(fetchRestaurant.fulfilled,(state,action)=>{
            state.loading=false;
            state.allRestaurant=action.payload;
            state.searchRestaurant=action.payload;
            state.error=""
        })
        builder.addCase(fetchRestaurant.rejected,(state,action)=>{
            state.allRestaurant=""
            state.loading=false;
            state.error=action.error.message;
        })
    },
    reducers:{
        search:(state,action)=>{
            state.allRestaurant=state.searchRestaurant.filter(item=>item.neighborhood.toLowerCase().includes(action.payload.toLowerCase()))
        }
    }

})

export const {search}=restaurantSlice.actions
export default restaurantSlice.reducer