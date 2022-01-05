import { useContext, useState } from "react"
import { useHistory } from "react-router-dom";
import { AppContext } from "../Context/Context";
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

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
            <Input defaultValue="Masai" style={{margin:10}} onChange={handleChange}></Input>
            <Button variant="contained" size="medium" onClick={handleClick}>Search</Button >
        </div>
    )
}