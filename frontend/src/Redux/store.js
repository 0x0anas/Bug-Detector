import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import blogsReducer from './blogsSlice'; 
import urlScanReducer from "./urlScanFreeSlice";
import urlScanPReducer from "./urlScanPSlice";
import networkScanReducer from "./networkFreeSlice";
import networkPSliceReducer from './networkPslice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    blogs: blogsReducer,
    urlScan: urlScanReducer,
    urlPscan:urlScanPReducer,
    networkScan: networkScanReducer,
    networkPScan: networkPSliceReducer,
  }
});

export default store;