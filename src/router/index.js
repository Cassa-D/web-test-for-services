import { Switch, Route } from "react-router-dom"
import styled from "styled-components"

import Home from "../pages/home"
import GameTable from "../pages/game-table"

const Router = () => {
    return (
        <StyledContainer>
            <Switch>
                <Route path="/table/:id">
                    <GameTable />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </StyledContainer>
    )
}

export default Router

const StyledContainer = styled.div`
    margin: 10px;
`