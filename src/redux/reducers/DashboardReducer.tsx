import { FETCH_USER_ACTIVITIES, FETCH_USER_ACTIVITIES_SUCCESS, FETCH_USER_ACTIVITIES_FAILURE } from '../actions/DashboardAction';
import { UserActivity } from '../../typescript/DashboardTypes';

interface ActivitiesState {
  userActivities: UserActivity[];
  error: string | null;
  apiStatus: "INITIAL" | "LOADING" | "SUCCESS" | "FAILURE";
}

const initialState: ActivitiesState = {
  userActivities: [],
  error: null,
  apiStatus: "INITIAL"
};

export default function reducer(state = initialState, action: any): ActivitiesState {
  switch (action.type) {
    case FETCH_USER_ACTIVITIES:
      return { ...state, userActivities: [], error: null, apiStatus: "LOADING" };
    case FETCH_USER_ACTIVITIES_SUCCESS:
      console.log("success")
      return { ...state,  userActivities: action.payload, error: null, apiStatus: "SUCCESS" };
    case FETCH_USER_ACTIVITIES_FAILURE:
      return { ...state, error: action.payload, userActivities:[], apiStatus: "FAILURE" };
    default:
      return state;
  }
}
