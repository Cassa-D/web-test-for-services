import { createStore, combineReducers } from 'redux'

import tables from './modules/tables/reducer'

const reducers = combineReducers({ tables })

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store