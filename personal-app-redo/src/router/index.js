import { Route, Switch } from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
const Router = ()=> {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/register">
                <Register />
            </Route>
        </Switch>
    )
}

export default Router
