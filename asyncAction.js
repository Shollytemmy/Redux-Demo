const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')



const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

//initialState

const initialState = {
    isLoading: false,
    users: [],
    isError: ''
}


const fetchUsersRequest = () => {
    return{
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) => {
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// reducer

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST: return{
            ...state, isLoading: true
        }
        case FETCH_USERS_SUCCESS: return{
            ...state, isLoading: false, users: action.payload, isError: ''
        }

        case FETCH_USERS_FAILURE: return{...state, isLoading: false, users: [], isError: action.payload}

        default: return state

    }

}

const getUsers = () =>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) =>{
            const users = response.data
            dispatch(fetchUsersSuccess(users))

        }).catch(error =>{
            dispatch(fetchUsersFailure(error.message))

        })


    }

}


const store = createStore(reducer, applyMiddleware(thunkMiddleware))

store.subscribe(() => {console.log(store.getState())})
store.dispatch(getUsers())