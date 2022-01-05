import { useContext, useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { AppContext } from "../Context/Context"
import { getRepoFailure, getRepoRequest } from "../Redux/app/appAction";
import { getRepos } from "./api";

function RepoCard ({name, description, language, html_url, type}){
    return(
        <div style={{justifyContent: "center", padding: 30, margin: 30, display: "flex", flexDirection: "column", border: "1px solid black"}}>
            <h2>{name}</h2>
            <p>{description}</p>
            <h3>Language: {language}</h3>
            <h3>Type: {type}</h3>
        </div>
    )
}

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
            {repos.map((item) => (
                <RepoCard 
                name={item.items.name} 
                description={item.items.description} 
                language={item.items.language} 
                html_url={item.items.html_url} 
                type={item.items.type} />
            ))}
        </div>
    )
}