import { createStore } from 'redux'
import TinaRedux from '@tinajs/tina-redux'
import todoApp from './reducers'

let reduxStore = createStore(todoApp)

let store = new TinaRedux(reduxStore)

export default store
