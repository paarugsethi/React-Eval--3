import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div style={{display: "flex", gap: 10, justifyContent:"center", alignContent:"center"}}>
            <div>
                <Link to="/">Login</Link>
            </div>
            <div>
                <Link to="/home">Home</Link>
            </div>
            <div>
                <Link to="/search">Search</Link>
            </div>
        </div>
        
    )
}

// npm install @mui/material