import * as API from '../../data/_DATA'

// actions
export const LOAD_APP_DATA = 'LOAD_APP_DATA'
export const FETCH_USERS_REQ = 'FETCH_USERS_REQ'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
export const FETCH_QUESTIONS_REQ = 'FETCH_QUESTIONS_REQ' 
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS'
export const FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR'
export const DEMO_LOGIN = 'DEMO_LOGIN'
export const SET_AUTHENTICATED_USER = 'SET_AUTHENTICATED_USER'

// action creators
export const fetchUsers = () => {
    return (dispatch) => {
        console.log('*** FETCH_USERS ACTION **')
        dispatch({ type: FETCH_USERS_REQ })
        API._getUsers()
        .then(res => {
            console.log('[SERVER RES]', res)
            let payload = Object.values(res)
            dispatch({ type: FETCH_USERS_SUCCESS, payload: payload })
        })
        .catch(e => {
            dispatch({ type: FETCH_USERS_ERROR, payload: e })
        })
    }
}

export const fetchQuestions = () => {
    return (dispatch) => {
        console.log('*** FETCH_QUESTIONS ACTION ***')
        dispatch({ type: FETCH_QUESTIONS_REQ })
        API._getQuestions()
        .then(res => {
            console.log('[SERVER RES]', res)
            let payload = Object.values(res)
            dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: payload })
        })
        .catch(e => {
            dispatch({ type: FETCH_QUESTIONS_ERROR, errors: e })
        })
    }
}

export const loadAppData = () => {
    return (dispatch) => {
        console.log('*** LOAD_APP_DATA ACTION ***')
        dispatch(fetchUsers())
        dispatch(fetchQuestions())
    }
}

export const demoLogin = (userId, username) => {
    return (dispatch, getState) => {
        let user = getState().users.data.filter(user => user.id === userId)[0]
        console.log('unicorn', user)
        dispatch({ type: DEMO_LOGIN, payload: { userId: userId, username: username, avatarURL: user.avatarURL, questions: user.questions, answers: user.answers } })
    }
}

export const setAuthenticatedUser = (user) => {
    return { type: SET_AUTHENTICATED_USER, payload: user }
}