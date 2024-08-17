import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import dashboardReducer from "./reducers/DashboardReducer";
import rootSaga from "./middlewares/DashboardSagaMiddleware";
import { combineReducers } from "redux";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({dashboardReducer})
// export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
