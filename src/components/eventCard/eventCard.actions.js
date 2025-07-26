import { getEvents } from './eventCard.service';

export const fetchEvents = () => async dispatch => {
  dispatch({ type: 'FETCH_EVENTS_REQUEST' });
  try {
    const data = await getEvents();
    dispatch({ type: 'FETCH_EVENTS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_EVENTS_FAILURE' });
  }
};