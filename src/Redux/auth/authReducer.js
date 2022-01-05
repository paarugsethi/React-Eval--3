import { actionConstants } from "./authActionType"

const initState = {
    isAuth: false
}

export const authReducer = (state=initState, action) => {
    switch(action.type){
        case actionConstants.LOGIN_SUCCESS: {
            return {
                ...state,
                isAuth: true
            }
        }
        default:
            return state;
    }
}

