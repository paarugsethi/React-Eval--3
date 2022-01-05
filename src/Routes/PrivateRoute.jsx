import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute({exact, path, children}){
    const isAuth = useSelector((state) => state.auth.isAuth);

    useEffect(() => {
        if (!isAuth){
            return <Redirect to="/"></Redirect>
        }

    }, [isAuth])

    return (
        <Route exact path="/home">
            {children}
        </Route>
    )
}