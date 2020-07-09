import axios from 'axios'


export const pageComponents = (params) => {
    return async (dispatch) => {
        const resp = await axios.get(`/cms?siteId=${params.siteId}&catalog=${params.catalog}&catalogVersion=${params.catalogVersion}&pageId=${params.pageId}`)
        dispatch({ type: 'FETCH_PAGE_COMPONENTS', payload: resp })
    }
}