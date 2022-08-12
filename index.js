const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddlewear = redux.applyMiddleware
const logger = reduxLogger.createLogger()



const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = 'BUY_ICECREAM'



const buyCake = () => {
    return{
    type: BUY_CAKE,
    info: "first redux"
}
}

const buyIcecream = () => {
    return{
        type: BUY_ICECREAM
    }
}




const initialCakeState ={
    numofcakes: 10
}

const initialIcreamState ={
    numOfIceCreams: 20

}
const cakeReducer = (state = initialCakeState, action) => {

    switch(action.type){
        case BUY_CAKE: return{ ...state,
            numofcakes: state.numofcakes - 1
        }


        default: return state
       

    }

}




const iceCreamReducer = (state = initialIcreamState , action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,  numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer
})


const store = createStore(rootReducer, applyMiddlewear(logger))
console.log("InitialState", store.getState())
const unSubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())


unSubscribe()











// reducer = (initialState, action) => newState


// const initialState = {
//     numofcakes: 10,
//     numOfIceCreams: 20
// }
