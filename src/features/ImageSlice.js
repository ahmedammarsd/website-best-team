import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../utils/BaseUrl";
import axios from "axios";

const initialState = {
    isLoading: false,
    status:"",
    image: null,
    error: null
}


// ===== UPLOADE IMAGE ===== 
export const uploadeSingleImg = createAsyncThunk("uploadeSingleImg" , async (image , thunkApi) => {
    try {
         await axios.post(`${BaseUrl}uploads/files/images`);
    }
    catch (err) {
        if (err.response.status === 500){
            return thunkApi.rejectWithValue("serverError")
        }
        else {
            return thunkApi.rejectWithValue("errorInUploadeImage");
        }
    } 
} )
// ===== EDN UPLOADE IMAGE ===== 

const uploadeImage = createSlice({
    name: "uploadeImage",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(uploadeSingleImg.pending , (state) => {
            state.isLoading = true;
        })
        builder.addCase(uploadeSingleImg.fulfilled , (state) => {
            state.isLoading = false
            state.status = "success"
        })
        builder.addCase(uploadeSingleImg.rejected , (state , action) => {
            state.isLoading = false;
            state.status = "failed";
            state.error = action.payload;

        })

    }
})

export default uploadeImage.reducer