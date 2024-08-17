import { UserActivity } from '../../typescript/DashboardTypes';

export const FETCH_USER_ACTIVITIES = 'FETCH_USER_ACTIVITIES';
export const FETCH_USER_ACTIVITIES_SUCCESS = 'FETCH_USER_ACTIVITIES_SUCCESS';
export const FETCH_USER_ACTIVITIES_FAILURE = 'FETCH_USER_ACTIVITIES_FAILURE';

export const fetchUserActivities = () => ({
  type: FETCH_USER_ACTIVITIES,
});

export const fetchUserActivitiesSuccess = (data: UserActivity[]) => ({
  type: FETCH_USER_ACTIVITIES_SUCCESS,
  payload: data,
});

export const fetchUserActivitiesFailure = (error: string) => ({
  type: FETCH_USER_ACTIVITIES_FAILURE,
  payload: error,
});

