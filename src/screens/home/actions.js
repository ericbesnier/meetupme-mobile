import { MeetupApi } from '../../../constants/api';

const meetupApi = new MeetupApi();

export const FETCH_MY_MEETUPS = 'FETCH_MY_MEETUPS';

// Afin de modifier notre state, les components vont dispatcher une action.
// Cette action est un objet, qui décrit le changement à effectuer.
//
// Nous définissons une fonction par action, qui retourne un objet avec :
// - un type (le type de l’action)
// - des “datas” (les informations supplémentaires dont nous avons besoin dans nos futurs reducers)

export const fetchMyMeetups = () => ({
  type: FETCH_MY_MEETUPS,
  payload: meetupApi.fetchGroupMeetups(),
});
