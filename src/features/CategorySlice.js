import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "../utils/BaseUrl";


const initialState = {
    isLoading: false,
    status:"",
    error: null,
    categories:[],
    isLoadingCategories : false,
    statusGetCategories: "",
    errorGetCategories: null

}

/// ======= ADD CATEGORY ======
export const addCategory = createAsyncThunk("addCategory" , async (data , thunkApi) => {
    try {
         await axios.post(`${BaseUrl}categories/create`, data);
    }
    catch (err) {
        if (err.response.status === 500){
            return thunkApi.rejectWithValue("serverError")
        }
        else {
            return thunkApi.rejectWithValue("errorHappend");
        }
    } 
 })
/// ======= END ADD CATEGORY ======

/// ======= GET CATEGORIES =========
export const getCategories = createAsyncThunk("getCategories" , async (arg, thunkApi) => {
    try {
        const data = await axios.get(`${BaseUrl}categories`);
        return data.data
   }
   catch (err) {
       if (err.response.status === 500){
           return thunkApi.rejectWithValue("serverError")
       }
       else {
           return thunkApi.rejectWithValue("errorHappend");
       }
   } 
})
/// ======= END GET CATEGORIES =========

const category = createSlice({
    name: "category",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(addCategory.pending , (state) => {
            state.isLoading = true;
        })
        builder.addCase(addCategory.fulfilled , (state ) => {
            state.isLoading = false;
            state.status = "success";
        })
        builder.addCase(addCategory.rejected , (state , action) => {
            state.isLoading = false ;
            state.status = "failed";
            state.error = action.payload
        })
        builder.addCase(getCategories.pending , (state) => {
            state.isLoadingCategories = true;
        })
        builder.addCase(getCategories.fulfilled , (state , action) => {
            state.isLoadingCategories = false;
            state.categories = action.payload;
            state.statusGetCategories = "success";
        })
        builder.addCase(getCategories.rejected , (state,action ) => {
            state.isLoadingCategories = false;
            state.statusGetCategories = "failed";
            state.errorGetCategories = action.payload
        })
    }

})


export default category.reducer