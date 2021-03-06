import axios from 'axios'


export const pageComponents = (params) => {
    return async (dispatch) => {
        const resp = await axios.get(`/cms?siteId=${params.siteId}&catalog=${params.catalog}&catalogVersion=${params.catalogVersion}&pageId=${params.pageId}`)
        dispatch({ type: 'FETCH_PAGE_COMPONENTS', payload: resp })
    }
}

export const sites = (params) => {
    return async (dispatch) => {
        const resp = await axios.get(`/sites`)
        dispatch({ type: 'FETCH_SITES', payload: resp.data })
    }
}

export const component = (siteId,uuid) => {
    return async (dispatch) => {
        const resp = await axios.get(`/cms/${siteId}/${uuid}`)
        dispatch({ type: 'COMPONENT_DATA', payload: resp.data })
    }
}