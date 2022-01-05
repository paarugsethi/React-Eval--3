import { appConstants } from "./appActionType"

export const getRepoRequest = () => {
    return {
        type: appConstants.GET_REPO_REQUEST,
        payload: {
            isLoading: true,
            isError: false
        }
    }
}

export const getRepoSuccess = (repos) => {
    return {
        type: appConstants.GET_REPO_SUCCESS,
        payload: {
            repos: repos,
            isLoading: true,
            isError: false
        }
    }
}

export const getRepoFailure = () => {
    return {
        type: appConstants.GET_REPO_FAILURE,
        payload: {
            isLoading: false,
            isError: true
        }
    }
}