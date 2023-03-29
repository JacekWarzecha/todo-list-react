import { getExampleTasks } from "./getExampleTasks";
import { debounce, call, put, delay } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
  console.log("let's start the new job");
  try {
    yield delay(2000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "coś poszło nie tak");
  }
}

export function* watchFetchExampleTasks() {
  yield debounce(2000, fetchExampleTasks.type, fetchExampleTasksHandler);
}
