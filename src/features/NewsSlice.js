import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../utils/BaseUrl";
import axios from "axios";

const initialState = {
    data:[],
    isLoading:false,
    status:"",
    error:null,
    isLoadingAdd: false,
    statusAdd:"",
    errorAdd: null,
    isLoadingUpdate: false,
    statusUpdate:"",
    errorUpdate: null,
    archiveIsLoading: false,
    archiveStatus: false,
    archiveError: false
}

/// ======= ADD NEWS ======
export const addNews = createAsyncThunk("addNews" , async (data , thunkApi) => {
    try {
         await axios.post(`${BaseUrl}news/create`, data);
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
/// ======= END ADD NEWS ======


/// ======= GET NEWS ======
export const getNews = createAsyncThunk("getNews" , async (arg , thunkApi) => {
    try {
        const get = await axios.get(`${BaseUrl}news`);
        return get.data
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
/// ======= END GET NEWS ======

/// ======= UPDATE NEWS ======
export const updateNews = createAsyncThunk("updateNews" , async (data , thunkApi) => {
    try {
         await axios.patch(`${BaseUrl}news/update`, data);
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
/// ======= END UPDATE NEWS ======


/// ======= UPDATE NEWS ======
export const archiveNews = createAsyncThunk("archiveNews" , async (data , thunkApi) => {
    try {
         await axios.patch(`${BaseUrl}news/update/archive`, data);
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
/// ======= END UPDATE NEWS ======

const news = createSlice({
    name: "news",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(addNews.pending , (state) => {
            state.isLoadingAdd = true
        });
        builder.addCase(addNews.fulfilled , (state) => {
            state.isLoadingAdd = false;
            state.statusAdd = "success";
        });
        builder.addCase(addNews.rejected , (state , action) => {
            state.isLoadingAdd = false;
            state.statusAdd = "failed";
            state.errorAdd = action.payload
        });
        builder.addCase(getNews.pending , (state) => {
            state.isLoading = true;
        })
        builder.addCase(getNews.fulfilled , (state , action) => {
            state.isLoading = false ;
            state.data = action.payload;
            state.status = "success";
            state.error = null
        })
        builder.addCase(getNews.rejected , (state , action) => {
            state.isLoading = false;
            state.status = "failed";
            state.error = action.payload
        })
        builder.addCase(updateNews.pending , (state) => {
            state.isLoadingUpdate = true
        });
        builder.addCase(updateNews.fulfilled , (state) => {
            state.isLoadingUpdate = false;
            state.statusUpdate = "success";
            state.errorUpdate = null
        });
        builder.addCase(updateNews.rejected , (state , action) => {
            state.isLoadingUpdate = false;
            state.statusUpdate = "failed";
            state.errorUpdate = action.payload
        });
        builder.addCase(archiveNews.pending , (state) => {
            state.archiveIsLoading = true
        });
        builder.addCase(archiveNews.fulfilled , (state) => {
            state.archiveIsLoading = false;
            state.archiveStatus = "success";
            state.archiveError = null
        });
        builder.addCase(archiveNews.rejected , (state , action) => {
            state.archiveIsLoading = false;
            state.archiveStatus = "failed";
            state.archiveError = action.payload
        });
    }
})

export default news.reducer