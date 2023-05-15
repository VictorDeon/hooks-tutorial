import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    number: 0,
    text: '...'
}

function reducer(state, action) {
    switch(action.type) {
        case 'addNumber':
            return {
                ...state,
                number: state.number + action.number
            }
        default:
            return state
    }
}

const UseReducer = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className='center'>
                <span className='text'>{state.number}</span>
                <div>
                    <button className='btn' onClick={() => dispatch({type: "addNumber", number: 2})}>+2</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
