// A store holds the whole state tree of your application
//An object that holds the complete state of your app. The only way to change its state is by dispatching actions.
//A store is not a class. It's just an object with a few methods on it
import { createStore , applyMiddleware , compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from './reducers';


const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;


// Creates a Redux store that holds the complete state tree of your app. There should only be a single store in your app.
// createStore(
//     reducer, calling rootreducer/combine reducer
//     [preloadedState], initialstate
//     [enhancer]) The store enhancer. You may optionally specify it to enhance the store with 
                                    //    third-party capabilities such as middleware, time travel, 
                                    //    persistence, etc. The only store enhancer that ships with 
                                    //    Redux is applyMiddleware()