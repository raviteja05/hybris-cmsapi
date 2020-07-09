import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware,createStore} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import Reducer from './reducers'
import App from './App'

ReactDOM.render(<Provider store={createStore(Reducer,applyMiddleware(thunk))}><App/></Provider>,document.getElementById('root'))