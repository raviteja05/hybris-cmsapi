import React from 'react'
import { connect } from 'react-redux'
import { component } from '../actions'


class ComponentDetailsView extends React.Component {
    componentDidMount() {
        console.log(this.props)

        //this.props.component(this.props)
        
    }

    render() {
        

        
        return (<div></div>
        )
    }
}

const mapStateToProps = (state) => {
    return { ...state }
}

export default connect(mapStateToProps, { component })(ComponentDetailsView)