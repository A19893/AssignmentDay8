import {createSlice} from '@reduxjs/toolkit'
const UserData={
    UserDetails:[],
    Resumes:[],
    TemplateNo:1,
}
export const UserSlice=createSlice({
    name:'UserData',
    initialState:UserData,
    reducers:{
        addData:(state,action)=>{
            console.log(action);
            state.UserDetails.push({
                id:action.payload.id,
                phoneNumber:action.payload.cvData.phone
            })
            state.Resumes.push({
                CV:action.payload.cvData
            })
        },
        addTemplate:(state,action)=>{
            state.TemplateNo=action.payload;
        }
    }
})
export const{addData,addTemplate}=UserSlice.actions;
export default UserSlice.reducer;