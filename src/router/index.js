import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { listTables } from "../redux/modules/tables/thunks"
import { listTeams } from "../redux/modules/teams/thunks"

import { Switch, Route, Redirect } from "react-router-dom"
import styled from "styled-components"

import Home from "../pages/home"
import GameTable from "../pages/game-table"

const Router = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listTables())
        dispatch(listTeams())
    }, [dispatch])

    return (
        <StyledContainer>
            <Switch>
                <Route path="/table/:id">
                    <GameTable />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </StyledContainer>
    )
}

export default Router

const StyledContainer = styled.div`
    margin: 10px;
`