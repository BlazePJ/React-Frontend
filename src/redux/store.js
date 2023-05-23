import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slice/formSlice";
import tableReducer from "./slice/tableSlice";
import statesApiReducer from "./slice/statesApiSlice";
import weatherApiReducer from "./slice/weatherApiSlice";
import chartsReducer from "./slice/chartsSlice"


const store = configureStore({
  reducer: {
    form: formReducer,
    table: tableReducer,
    statesApi: statesApiReducer,
    weatherApi: weatherApiReducer,
    charts: chartsReducer,
    
  },
});

export default store;
