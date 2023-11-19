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
    archiveError: false,
    dataLogin: [],
    loginIsLoading: false,
    loginStatus:"",
    loginError: null
}

/// ======= ADD USER ======
export const addUser = createAsyncThunk("addUser" , async (data , thunkApi) => {
    try {
         await axios.post(`${BaseUrl}users/signup`, data);
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
/// ======= END ADD USER ======

/// ======= GET USERS ======
export const getUsers = createAsyncThunk("getUsers" , async (arg , thunkApi) => {
    try {
        const get = await axios.get(`${BaseUrl}users`);
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
/// ======= END GET USERS ======

/// ====== UPDATE ENABLE USER ====
export const updateEnable = createAsyncThunk("updateEnable" , async (data , thunkApi) => {
    try {
         await axios.patch(`${BaseUrl}users/update_enable` , data);
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
/// ====== UPDATE ENABLE USER ====


/// ====== LOGIN USER ====
export const loginUser = createAsyncThunk("loginUser" , async (data , thunkApi) => {
    try {

        // headers: {
        //     "Content-Type" : "application/json",
        //     'Accept': 'application/json',
        //     'Authorization': 'Basic ',
        //   }
         const req =  await axios.post(`${BaseUrl}users/login` , data );
         const response = req.data ;
         localStorage.setItem("user", JSON.stringify(response));
         return response

    }
    catch (err) {
        if (err.response.status === 500){
            return thunkApi.rejectWithValue("serverError")
        }
        else if (err.response.status === 401){
            return thunkApi.rejectWithValue(err.response.data)
        }
        else {
            return thunkApi.rejectWithValue("errorHappend");
        }
    } 
})
/// ======  END LOGIN USER ====



const users = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(addUser.pending , (state) => {
            state.isLoadingAdd = true
        });
        builder.addCase(addUser.fulfilled , (state) => {
            state.isLoadingAdd = false;
            state.statusAdd = "success";
            state.errorAdd = null
        });
        builder.addCase(addUser.rejected , (state , action) => {
            state.isLoadingAdd = false;
            state.statusAdd = "failed";
            state.errorAdd = action.payload
        });
        builder.addCase(getUsers.pending , (state) => {
            state.isLoading = true;
        })
        builder.addCase(getUsers.fulfilled , (state , action) => {
            state.isLoading = false ;
            state.data = action.payload;
            state.status = "success";
            state.error = null
        })
        builder.addCase(getUsers.rejected , (state , action) => {
            state.isLoading = false;
            state.status = "failed";
            state.error = action.payload
        })
        builder.addCase(updateEnable.pending , (state) => {
            state.archiveIsLoading = true
        });
        builder.addCase(updateEnable.fulfilled , (state) => {
            state.archiveIsLoading = false;
            state.archiveStatus = "success";
            state.archiveError = null
        });
        builder.addCase(updateEnable.rejected , (state , action) => {
            state.archiveIsLoading = false;
            state.archiveStatus = "failed";
            state.archiveError = action.payload
        });
        builder.addCase(loginUser.pending , (state) => {
            state.loginIsLoading = true;
            state.dataLogin = []
            state.loginStatus = "";
            state.loginError = null
        });
        builder.addCase(loginUser.fulfilled , (state , action) => {
            state.loginIsLoading = false;
            state.dataLogin = action.payload
            state.loginStatus = "success";
            state.loginError = null
        });
        builder.addCase(loginUser.rejected , (state , action) => {
            state.loginIsLoading = false;
            state.dataLogin = []
            state.loginStatus = "failed";
            state.loginError = action.payload
        });
    }
})

export default users.reducer