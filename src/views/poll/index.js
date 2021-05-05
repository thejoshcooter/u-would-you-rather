import React, { useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../redux/actions'

import Poll from '../../components/Poll'

const PollView = () => {
    const match = useRouteMatch()
    const dispatch = useDispatch()
    const question = useSelector(state => state.questions.data).map(question => question.id === match.params.id && question).filter(item => item != false)[0]
    console.log('[CHECK MATCH]', match)
    console.log('[CHECK QUESTION DATA]', question)

    useEffect(() => {
        console.log('[data on pollview] ', question)
        if (question === undefined) {
            dispatch(actions.loadAppData())
        }
    }, [])
    
    return (
        <>
            {question && (
                <Poll 
                question={question}
            />
            )}
        </>
    )
}

export default PollView