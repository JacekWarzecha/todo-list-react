import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/Tasks/tasksSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleweare = createSagaMiddleware();

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: [sagaMiddleweare],
});

sagaMiddleweare.run(rootSaga);

export default store;
