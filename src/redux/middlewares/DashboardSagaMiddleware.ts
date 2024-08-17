import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchUserActivitiesSuccess, fetchUserActivitiesFailure, FETCH_USER_ACTIVITIES } from '../actions/DashboardAction';
import { UserActivity } from '../../typescript/DashboardTypes';
import axios from 'axios';
import { userActiviesApiData } from '../../typescript/DashboardData';


const getUserActivitiesApiCallFunc = async (): Promise<UserActivity[]> => {
  try {
    // const response = await fetch('http://52.168.1.54:8080/api/v1/userActivities');
    // const response = await axios.get("http://52.168.1.54:8080/api/v1/userActivities");
      //Check once the URL I am getting CORS Error, so I mocked the JsonData.
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos"); 
    if (response.status === 200) {
      const jsonData = await response.data;
      return jsonData;
    } else {
      throw new Error("No Data due to Internal server Error");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

function* fetchUserActivitiesSaga() {
  try {
    const data: UserActivity[]  = yield call(getUserActivitiesApiCallFunc);
    console.log("apiData", data);
    yield put(fetchUserActivitiesSuccess(userActiviesApiData));
  } catch (error: any) {
    yield put(fetchUserActivitiesFailure(error.message));
  }
}

function* rootSaga() {
  yield takeEvery(FETCH_USER_ACTIVITIES, fetchUserActivitiesSaga);
}

export default rootSaga;
