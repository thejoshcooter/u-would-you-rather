import * as actions from '../actions/index'

// temp initial state
const initialState = {
    auth: {},
    users: {
        fetching: false,
        data: []
    },
    questions: {
        fetching: false,
        data: []
    }
  }
  
  // temp default reducer
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_USERS_REQ:
            return {
                ...state,
                users: { ...state.users, fetching: true }
            }
        case actions.FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: { fetching: false, data: action.payload }
            }
        case actions.FETCH_USERS_ERROR:
            return {
                ...state,
                users: { ...state.users, errors: action.payload }
            }
        case actions.FETCH_QUESTIONS_REQ:
            return {
                ...state,
                questions: { ...state.questions, fetching: true }
            }
        case actions.FETCH_QUESTIONS_SUCCESS:
            return {
                ...state,
                questions: { fetching: false, data: action.payload }
            }
        case actions.FETCH_QUESTIONS_ERROR:
            return {
                ...state,
                questions: { ...state.questions, fetching: false, errors: action.payload }
            }
        default:
            return state
    }
  }

  export default reducer