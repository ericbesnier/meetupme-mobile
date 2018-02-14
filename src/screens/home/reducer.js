import {
  FETCH_MY_MEETUPS,
} from './actions';

// Une fois l’action “ dispatchée “, nous avons besoin de fonctions qui écoutent
// les actions et modifient le state en conséquence.
//
// Ce sont les reducers.
//
// Chaque reducer prend en charge une partie du state. Un reducer a pour but de décrire le state initial
// et de retourner le nouveau state pour les différents types d’actions qu’il prend en charge

const INITIAL_STATE = {
  myMeetups: {
    data: [],
    isFetched: false,
    error: {
      on: false,
      message: null,
    },
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${FETCH_MY_MEETUPS}_PENDING`:
      return INITIAL_STATE;
    case `${FETCH_MY_MEETUPS}_FULFILLED`:
      return {
        myMeetups: {
          data: action.payload,
          isFetched: true,
          error: {
            on: false,
            message: null,
          },
        },
      };
    case `${FETCH_MY_MEETUPS}_REJECTED`:
      return {
        myMeetups: {
          data: [],
          isFetched: true,
          error: {
            on: true,
            message: 'Error when fetching my meetups',
          },
        },
      };
    default:
      return state;
  }
};
