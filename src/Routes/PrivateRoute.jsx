import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute({exact, path, children}){
    const isAuth = useSelector((state) => state.isAuth);

    if (isAuth){
        return <Redirect to="/"></Redirect>
    }

    return (
        <Route exact path="/home">
            {children}
        </Route>
    )
}