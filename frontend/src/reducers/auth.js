// reducers are there to manage state in an application
//field that indicates the type of action being performed. 
//Types can be defined as constants and imported from another module. 
import 
{   LOGIN_SUCCESS ,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL ,
    AUTHENTICATED_FAIL,
    AUTHENTICATED_SUCCESS,
    LOGOUT
} from '../actions/types'

// It's common to set your app's current state before your reducer,
//  then set it as the argument's default value:

const initialState = {
    access: localStorage.getItem('access'),
    refresh : localStorage.getItem('refresh'),
    isAuthenticated : null,
    user: null

};
// A reducer is just a function that takes two arguments and returns your app's current state.
// The two arguments it takes are:
// Your current state (JavaScript object)
// An action (also a JavaScript object)


export default function(state = initialState , action ){
    const {type , payload } = action;
    switch(type){
        case AUTHENTICATED_SUCCESS:
            return{
                ...state,
                isAuthenticated: true                
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('access' , payload.access)
            return{
                ...state,
                isAuthenticated: true,
                access:payload.access,
                refresh:payload.refresh      

            }
        case USER_LOADED_SUCCESS:
            return{
                ...state,
                user:payload
            }
        case USER_LOADED_FAIL:
            return{
                ...state,
                user:null     
            }
        case AUTHENTICATED_FAIL:
            return{
                ...state,
                isAuthenticated: false                
            }            
        case LOGIN_FAIL:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh')
            return{
                ...state,
                access:null,
                refresh:null,
                isAuthenticated:null,
                user:null

            }
        case LOGOUT:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh')
            return{
                ...state,
                access:null,
                refresh:null,
                isAuthenticated:null,
                user:null                
            }
        default :{
            return state  
        }

    }
};