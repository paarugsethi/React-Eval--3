import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Search from "../Pages/Search";
import PrivateRoute from "./PrivateRoute";

export default function Routes(){
    return (
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route exact path="/search">
                <Search/>
            </Route>
            <PrivateRoute exact path="/home">
                <Home/>
            </PrivateRoute>
        </Switch>
    )
}