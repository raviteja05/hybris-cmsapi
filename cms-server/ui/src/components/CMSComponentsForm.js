import React from 'react'
import { connect } from 'react-redux'
import {sites} from '../actions'
import {SelectDropDown} from '.'

class CMSComponentsForm extends React.Component{

    componentDidMount(){
        this.props.sites()
    }
    render(){
        
        return (
            <React.Fragment>
                 <form method="get" action="/app/page-components" className="ui form">
        <div className="ui centered grid">
            <div className="ui row">
                <div className="ui column">Site Id </div>
                <div className="ui two wide column">
                  {this.props.types? <SelectDropDown input={this.props.types.sites}/>:""}
                </div>
                <div className="ui column">Catalog</div>
                <div className="ui two wide column">
                    <div className="ui small input"><input type="text" name="catalog" id="catalog" className="ui input" /></div>
                </div>
                <div className="ui column">Catalog Version</div>
                <div className="ui two wide column">
                    <select name="catalogVersion" className="ui dropdown">

                        <option value="Staged">Staged</option>
                        <option value="Online">Online</option>
                    </select>
                </div>
                <div className="ui column">Page ID</div>
                <div className="ui two wide column">
                    <div className="ui small input"><input type="text" name="pageId" id="pageId" className="ui input" /></div>
                </div>
                <div className="ui three wide column"><input className="ui button blue" type="submit" /></div>
            </div>
        </div>
    </form>
            </React.Fragment>
        )
    }
}


const mapStateToProps=(state)=>{
    return {...state.sites}
}
export default connect(mapStateToProps,{sites})(CMSComponentsForm)