export const FETCH_USERS = 'FETCH_USERS';

export const fetchUsers = () => async (dispatch, getState, axiosInstance) => {
  const { data } = await axiosInstance.get('/users');

  dispatch({
    type: FETCH_USERS,
    payload: data
  });
};
