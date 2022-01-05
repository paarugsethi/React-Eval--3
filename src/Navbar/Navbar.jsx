import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Navbar() {
    return (

        <div style={{ display: "flex", gap: 10, justifyContent: "center", alignContent: "center" }}>
            <AppBar>
                <Toolbar>
                    <div style={{margin: 10, color:"white"}}>
                        <Typography variant="h6" component="div" color="white">
                            <Link color="white" to="/">Login</Link>
                        </Typography>

                    </div>
                    <div style={{margin: 10}}>
                        <Typography variant="h6" component="div" color="white">
                            <Link to="/home">Home</Link>
                        </Typography>
                    </div>
                    <div style={{margin: 10}}>
                        <Typography variant="h6" component="div" color="white">
                            <Link to="/search">Search</Link>
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </div>

    )
}