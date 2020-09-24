import {counterReducer} from './counter'


import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
    counter: counterReducer, 
    
})
