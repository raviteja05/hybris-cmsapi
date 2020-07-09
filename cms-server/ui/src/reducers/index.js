import {combineReducers} from 'redux'

export const pageComponents=(state={},action)=>{
    if(action.type==='FETCH_PAGE_COMPONENTS'){
        
        return {...state,...action.payload}
    }
    return state;
}

export const sites=(state={},action)=>{
    if(action.type==='FETCH_SITES'){
        
        return {...state,...action.payload}
    }
    return state;
}

export const componentData=(state={},action)=>{
    if(action.type==='COMPONENT_DATA'){
        
        return {...state,...action.payload}
    }
    return state;
}

export const catalogs=(state={},action)=>{
    if(action.type==='CATALOGS'){
       
        return {...state,...action.payload}
    }
    return state;
}


export default combineReducers({pageComponents,sites,componentData,catalogs})