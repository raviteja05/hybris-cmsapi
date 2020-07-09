import React from 'react'
import axios from 'axios'
import CMSComponentsForm from './CMSComponentsForm'




//hardcoded now- To be refactored after integration with API
//const sites={"sites":[{"contentCatalogs":["string"],"name":{},"previewUrl":"string","uid":"TH"},{"contentCatalogs":["string"],"name":{},"previewUrl":"string","uid":"FC"},{"contentCatalogs":["string"],"name":{},"previewUrl":"string","uid":"FJ"},{"contentCatalogs":["string"],"name":{},"previewUrl":"string","uid":"CR"}]}

export const Header = () => {
    return (
        <div className="ui segment">
           <CMSComponentsForm/>
        </div>
    )
}

export const SelectDropDown=(input)=>{
    var data={...input}
    return (
        
        <select name="siteId" className="ui dropdown">
        {data.input.map(el=><option key={`${el.uid}`} value={`${el.uid}`}>{el.uid}</option>)}
        </select>

    )
}