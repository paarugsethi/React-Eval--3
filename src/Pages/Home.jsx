import { useContext, useState } from "react"
import { useHistory } from "react-router-dom";
import { AppContext } from "../Context/Context";

export default function Home () {
    const [query, setQuery] = useContext(AppContext);
    const history = useHistory();

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const handleClick = () => {
        const q = query;
        console.log(q)
        history.push("/search")
    }

    return (
        <div>
            <h1>Search for Repositories</h1>
            <input onChange={handleChange}></input>
            <button onClick={handleClick}>Search</button>
        </div>
    )
}