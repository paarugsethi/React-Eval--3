import { getRepoFailure, getRepoRequest, getRepoSuccess } from "../Redux/app/appAction";

export const getRepos = (query, dispatch) => {

    const repoRequestAction = getRepoRequest();
    dispatch(repoRequestAction);

    return(
        fetch(`https://api.github.com/search/repositories?q=${query}&page=1&per_page=10`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res.incomplete_results, res.items, "RES")
            const repoSuccessAction = getRepoSuccess(res.items);
            dispatch(repoSuccessAction);
        })
        .catch((res) => {
            const repoFailureAction = getRepoFailure();
            dispatch(repoFailureAction);
        })
    )
}