import { createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from "redux-thunk"

import tables from './modules/tables/reducer'
import teams from './modules/teams/reducer'

const reducers = combineReducers({ tables, teams })

const store = createStore(reducers, applyMiddleware(thunk))

export default store