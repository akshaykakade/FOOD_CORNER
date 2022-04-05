//get reduc
const redux = require('redux');
const combineReducers = redux.combineReducers;
const createStore = redux.createStore;

//action constant
const BUY_CAKE = "BUY_CAKE";
//another action const
const BUY_ICECREAM ="BUY_ICECREAM";

//actioCreator return action
const buyCake =()=>{
    return{
        type:BUY_CAKE
    }

}

const buyIceCream =()=>{
    return{
        type:BUY_ICECREAM
    }
}

const initialState = {
    noOfCakes :10,
    noOfIceCreams :20
    
};

const ist ={
    noOfCakes :10
};

const ict ={
    noOfIceCreams :20
};

//create reducer
const reducer =(state=initialState,action) =>{

    switch(action.type)
    {
        case BUY_CAKE:
            return{
                ...state,
                noOfCakes :state.noOfCakes -1
            }
            case BUY_ICECREAM:
                return{
                    ...state,
                    noOfIceCreams: state.noOfIceCreams - 1
                }
    }
}

//create another reducer
const reducerAnother =(state=ict,action)=>{
    switch(action.type)
    {
        case BUY_ICECREAM:
            return{
                ...state,
                noOfIceCreams: state.noOfIceCreams - 1
            }
    }
};



//Create Store
const store = createStore(reducer);

//listner
const unsubscribe = store.subscribe(()=>{console.log("Updated state ", store.getState())})

//actions
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
//unSubscribe
unsubscribe();