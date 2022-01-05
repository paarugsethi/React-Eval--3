import { useContext, useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { AppContext } from "../Context/Context"
import { getRepoFailure, getRepoRequest } from "../Redux/app/appAction";
import { getRepos } from "./api";

export default function Search () {
    const [query] = useContext(AppContext) || "masai";
    const dispatch = useDispatch();
    const {repos, isLoading, isError} = useSelector((state) => state.app, shallowEqual);

    useEffect(() => {
        // dispatch(getRepos(query));
        // getRepos(query, dispatch);
    })
    
    return (
        <div>
            {isLoading && <h3>Loading...</h3>}
            {isError && <h3>Oops! Something went wrong!</h3>}
            <div>Search</div>
        </div>
    )
}