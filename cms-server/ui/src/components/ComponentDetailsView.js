import React from 'react'
import { connect } from 'react-redux'
import { component } from '../actions'


class ComponentDetailsView extends React.Component {
    componentDidMount() {
        this.props.component(this.props.match.params)
    }

    render() {
        return (
            <div className="ui segment">

                <table className="ui celled table">
                    <thead>
                        <tr><th>Key</th>
                            <th>Value</th>

                        </tr></thead>
                    <tbody>
                        {this.props.cmsItemData && Object.entries(this.props.cmsItemData).map(([key, value]) =>

                            <tr>
                                <td>{key}</td>
                                <td>{value instanceof Object ? JSON.stringify(value) : value}</td>
                            </tr>)}

                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { ...state.componentData }
}

export default connect(mapStateToProps, { component })(ComponentDetailsView)