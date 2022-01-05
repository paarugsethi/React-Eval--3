import { appConstants } from "./appActionType";


const initState = {
    repos: [],
    isLoading: true,
    isError: false
}

export default function appReducer (state = initState, action) {
    switch (action.type){
        case appConstants.GET_REPO_REQUEST:{
            return{
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case appConstants.GET_REPO_SUCCESS:{
            return{
                repos: action.payload.repos,
                isLoading: false,
                isError: false
            }
        }
        case appConstants.GET_REPO_FAILURE:{
            return{
                ...state,
                isLoading: false,
                isError: true
            }
        }
        default:
            return state;
    }
}