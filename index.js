const redux = require('redux')
const createStore = redux.createStore


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


// reducer = (initialState, action) => newState


// const initialState = {
//     numofcakes: 10,
//     numOfIceCreams: 20
// }


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


const IceaCreamRducer = (state = initialIcreamState , action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,  numOfIceCreams: state.numOfIceCreams - 1
        }
    }
}


const store = createStore(cakeReducer)
console.log("InitialState", store.getState())
const unSubscribe = store.subscribe(() => console.log("UpdatedState", store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())


unSubscribe()