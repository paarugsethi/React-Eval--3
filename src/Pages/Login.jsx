import { useDispatch } from "react-redux"
import { loginSuccess } from "../Redux/auth/authAction";

export default function Login () {
    
    const dispatch = useDispatch();

    const handleLogin = () => {
        const isAuth = true;
        console.log(isAuth)
        const action = loginSuccess(isAuth);
        dispatch(action);
    }
    
    return (
        <div>
            <h3>Login</h3>
            <button onClick={handleLogin}>Click to Login</button>
        </div>
    )
}