import {combineReducers} from 'redux'

export const pageComponents=(state={},action)=>{
    if(action.type==='FETCH_PAGE_COMPONENTS'){
        
        return {...state,...action.payload}
    }
    return state;
}


export default combineReducers({pageComponents})