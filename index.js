const redux = require('redux')
const createStore = redux.createStore


const BUY_CAKE = "BUY_CAKE"



const buyCake = () => {
    return{
    type: BUY_CAKE,
    info: "first redux"
}
}


// reducer = (initialState, action) => newState


const initialState = {
    numofcakes: 10
}

const cakeReducer = (state = initialState, action) => {

    switch(action.type){
        case BUY_CAKE: return{ ...state,
            numofcakes: state.numofcakes - 1
        }

        default: return state
       

    }

}


const store = createStore(cakeReducer)
console.log("InitialState", store.getState())
const unSubscribe = store.subscribe(() => console.log("UpdatedState", store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unSubscribe()