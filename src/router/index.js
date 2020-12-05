import {Switch, Route} from "react-router-dom"

import Home from "../pages/home"
import Tables from "../pages/gameTable"

const Router = () => {
    return (
        <Switch>
            <Route path="/table/:id">
                <Tables />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export default Router