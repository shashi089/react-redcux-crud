import { createSlice } from "@reduxjs/toolkit";
import  {usersList} from "./Data"


const userSlice= createSlice({
    name:"users",
    initialState: usersList,
    reducers:{
     addUser:(state, action)=>{
      state.push(action.payload)
     },
     updateUser:(state, action)=>{
        const {id,name,email}= action.payload
        const updateUser = state.find(user=> user.id==id)
        if(updateUser){
            updateUser.name=name;
            updateUser.email=email
        }
       },
       deleteUser:(state, action)=>{
        const {id}= action.payload
        const finduser = state.find(user=> user.id==id)
        if(finduser){
            return state.filter(element => element.id !=id)
        }
    }
    } 
})
export const{addUser,updateUser,deleteUser} = userSlice.actions
export default userSlice.reducer