// console.log("Hello Redux")


const BUY_CAKE = "BUY_CAKE"



const buyCake = () => {
    return{
    type: BUY_CAKE,
    info: "first redux"
}
}


// reducer = (initialState, action) => newState


const initialState = 0

const cakeReducer = (state = initialState, action) => {

    switch(action.type){
        case BUY_CAKE: 
        return state - 1
        default:
            return state

    }

}