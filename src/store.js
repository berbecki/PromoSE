import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './redux/reducers/root'

import autoSaveMiddleware from './redux/middleware/autosaveMiddleware'

const store = createStore(
    rootReducer,
    compose (
        applyMiddleware(autoSaveMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

window.store = store
export default store
