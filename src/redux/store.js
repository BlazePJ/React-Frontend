import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slice/formSlice";
import tableReducer from "./slice/tableSlice";
import statesApiReducer from "./slice/statesApiSlice";
import weatherApiReducer from "./slice/weatherApiSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    table: tableReducer,
    statesApi: statesApiReducer,
    weatherApi: weatherApiReducer,
  },
});

export default store;
