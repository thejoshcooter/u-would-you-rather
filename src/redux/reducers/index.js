import * as actions from '../actions/index'

// temp initial state
const initialState = {
    auth: {
        isLoggedIn: false,
        userId: null,
        user: null,
        demo: false,
        demoCredentials: 'password123'
    },
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
        case actions.DEMO_LOGIN:
            return {
                ...state,
                auth: { ...state.auth, isLoggedIn: true, userId: action.payload.userId, user: action.payload.username, demo: true }
            }
        case actions.SET_AUTHENTICATED_USER:
            return {
                ...state,
                auth: { ...state.auth, isLoggedIn: true, userId: action.payload.userId, user: action.payload.username, demo: true }
            }
        default:
            return state
    }
  }

  export default reducer