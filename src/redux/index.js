import { createStore, combineReducers } from 'redux'

import tables from './modules/tables/reducer'
import teams from './modules/teams/reducer'

const reducers = combineReducers({ tables, teams })

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store