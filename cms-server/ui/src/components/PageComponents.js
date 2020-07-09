import React from 'react'
import { connect } from 'react-redux'
import { pageComponents } from '../actions'
import queryString from 'query-string'

class PageComponentsView extends React.Component {
    componentDidMount() {
        const params = queryString.parse(window.location.search)

        this.props.pageComponents(params)
        
    }

    render() {
        const params = queryString.parse(window.location.search)

        
        return (<div className="ui raised very padded text container">

            <table className="ui celled table">
                <thead>
                    <tr><th>Component Id</th>
                        <th>Slot Id</th>
                        <th>Position</th>
                    </tr></thead>
                <tbody>
                    {this.props.data ?this.props.data.data? this.props.data.data.pageContentSlotComponentList.map(el =>
                        <tr key={el.uid}>
                            <td data-label="comId"><a href={`/app/components/${params.siteId}/${el.componentUuid}`}>{el.componentId}</a></td>
                            <td data-label="slotId">{el.slotId}</td>
                            <td data-label="pos">{el.position}</td>
                        </tr>) : <tr></tr>:<tr></tr>}

                </tbody>
            </table>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { ...state.pageComponents }
}

export default connect(mapStateToProps, { pageComponents })(PageComponentsView)