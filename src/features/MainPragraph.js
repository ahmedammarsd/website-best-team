import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "../utils/BaseUrl";

const initialState = {
    data:[],
    isLoading: false,
    status:"",
    error: null,
    updateIsLoading: false,
    updateStatus: ""
}

// GET MAIN PRAGRAPH - READ
 export const getMainParagraph = createAsyncThunk("getMainParagraph" , async (arg , thunkApi) => {
    try {
        const data = await axios.get(`${BaseUrl}main_paragraphs`);
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
// END GET MAIN PRAGRAPH - READ

// UPDATE MAIN PARAGRAPH - UPDATE
export const updateMainParagraph = createAsyncThunk("updateMainParagraph" , async (data , thunkApi) => {
    try {
         await axios.patch(`${BaseUrl}main_paragraphs/update`, data)  
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
// UPDATE MAIN PARAGRAPH - UPDATE


const mainParagraph = createSlice({
    name: "getMian",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getMainParagraph.pending , (state) => {
            state.isLoading = true
        });
        builder.addCase(getMainParagraph.fulfilled , (state , action) => {
            state.isLoading = false;
            state.status = "success";
            state.data = action.payload;
        });
        builder.addCase(getMainParagraph.rejected , (state , action) => {
            state.isLoading = false;
            state.status = "failed";
            state.error = action.payload
        });
        builder.addCase(updateMainParagraph.pending , (state) => {
            state.updateIsLoading = true;
        })
        builder.addCase(updateMainParagraph.fulfilled , (state) => {
            state.updateIsLoading = false;
            state.updateStatus = "success"
        })
        builder.addCase(updateMainParagraph.rejected , (state , action) => {
            state.updateIsLoading = false;
            state.updateStatus = "failed";
            state.error = action.payload;
        })
    }
})

export default mainParagraph.reducer