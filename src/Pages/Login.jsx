import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import { loginSuccess } from "../Redux/auth/authAction";
import Button from '@mui/material/Button';


export default function Login () {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleLogin = () => {
        const isAuth = true;

        const action = loginSuccess(isAuth);
        dispatch(action);
        if (isAuth){
            history.push("/home")
        }
    }
    
    return (
        <div>
            <h3 style={{margin: 30}}>Login</h3>
            <Button variant="contained" size="medium" onClick={handleLogin}>Click to Login</Button>
        </div>
    )
}