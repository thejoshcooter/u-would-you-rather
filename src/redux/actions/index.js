import * as API from '../../data/_DATA'

// actions
export const LOAD_APP_DATA = 'LOAD_APP_DATA'
export const FETCH_USERS_REQ = 'FETCH_USERS_REQ'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
export const FETCH_QUESTIONS_REQ = 'FETCH_QUESTIONS_REQ' 
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS'
export const FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR'
export const DEMO_LOGIN_SUCCESS = 'DEMO_LOGIN_SUCCESS'
export const SET_AUTHENTICATED_USER = 'SET_AUTHENTICATED_USER'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
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
            let payload = Object.values(res).sort((a,b) => b.timestamp - a.timestamp )
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

export const demoLogin = (form, history) => {
    return (dispatch, getState) => {
        const auth = getState().auth
        const users = getState().users.data
        let demoUsers = ['sarahedo', 'tylermcginnis', 'johndoe']

        const { id, username, password } = form

        if (demoUsers.includes(id) && password === auth.demoCredentials) {
            let user = users.filter(user => user.id === id)[0]
            localStorage.setItem('authenticatedUser', JSON.stringify(user))
            dispatch({ type: DEMO_LOGIN_SUCCESS, payload: user })
            history.push('/dashboard')
        } else {
            console.log('please provide valid credentials')
        }
    }
}

export const logout = () => {
    return (dispatch) => {
        localStorage.clear()
        dispatch({ type: LOGOUT_SUCCESS })
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
                let payload = Object.values(res).sort((a,b) => b.timestamp - a.timestamp )
                dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: payload })
            })
            .catch(e => {
                dispatch({ type: FETCH_QUESTIONS_ERROR, errors: e })
            })
        })
        .catch(e => console.error(e))
    }
}