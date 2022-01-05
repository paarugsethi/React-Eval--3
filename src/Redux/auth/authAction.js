import { actionConstants } from "./authActionType"

export const loginSuccess = (isAuth) => {
    console.log("action", isAuth)
    return {
        type: actionConstants.LOGIN_SUCCESS,
        payload: {
            isAuth: true
        }
    }
}