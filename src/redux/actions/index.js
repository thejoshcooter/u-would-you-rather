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
export const CREATE_QUESTION_REQ = 'CREATE_QUESTION_REQ'
export const CREATE_QUESTION_SUCCESS = 'CREATE_QUESTION_SUCCESS'
export const CREATE_QUESTION_ERROR = 'CREATE_QUESTION_ERROR'
export const SAVE_ANSWER_REQ = 'SAVE_ANSWER_REQ'
export const SAVE_ANSWER_SUCCESS = 'SAVE_ANSWER_SUCCESS'
export const SAVE_ANSWER_ERROR = 'SAVE_ANSWER_ERROR'

// action creators
export const fetchUsers = () => {
    return (dispatch) => {
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
        dispatch({ type: DEMO_LOGIN, payload: { userId: userId, username: username, avatarURL: user.avatarURL, questions: user.questions, answers: user.answers } })
    }
}

export const setAuthenticatedUser = (user) => {
    return { type: SET_AUTHENTICATED_USER, payload: user }
}

export const createQuestion = (opt1, opt2, author) => {
    return (dispatch) => {
        let question = { optionOneText: opt1, optionTwoText: opt2, author }
        dispatch({ type: CREATE_QUESTION_REQ })
        API._saveQuestion(question)
        .then( res => {
            console.log('[server res]', res)
        })
        .catch(e => console.error(e))
    }
}

export const saveAnswer = (qid, answer) => {
    return (dispatch, getState) => {
        const authedUser = getState().auth.userId

        dispatch({ type: SAVE_ANSWER_REQ })

        API._saveQuestionAnswer({ authedUser, qid, answer })
        .then(res => {
            API._getQuestions()
            .then(res => {
                console.log('[SERVER RES]', res)
                let payload = Object.values(res)
                dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: payload })
            })
            .catch(e => {
                dispatch({ type: FETCH_QUESTIONS_ERROR, errors: e })
            })
        })
        .catch(e => console.error(e))
    }
}