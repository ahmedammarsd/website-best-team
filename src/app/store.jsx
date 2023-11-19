import { configureStore  } from "@reduxjs/toolkit";

import mainPragraphReducer from "../features/MainPragraph";
import CategoryReducer from "../features/CategorySlice";
import newsReducer from "../features/NewsSlice";
import imageReducer from "../features/ImageSlice";
import userReducer from "../features/UserSlice";
const store = configureStore({
    reducer: {
        mainPara: mainPragraphReducer,
        category: CategoryReducer,
        news: newsReducer,
        image: imageReducer,
        user: userReducer
    }
})

export default store