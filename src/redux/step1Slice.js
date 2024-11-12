import { createSlice } from "@reduxjs/toolkit";
const initialState={
    email:""
}
const step1slice=createSlice({
    name:"step1email",
    initialState,
    reducers:{
        setEmail:(state,action)=>{
            state.email=action.payload


        }
    }

})

export const {setEmail}=step1slice.actions
export default step1slice.reducer;