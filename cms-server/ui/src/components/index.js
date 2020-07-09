import React from 'react'


//hardcoded now- To be refactored after integration with API
const sites={"sites":[{"contentCatalogs":["string"],"name":{},"previewUrl":"string","uid":"TH"},{"contentCatalogs":["string"],"name":{},"previewUrl":"string","uid":"FC"},{"contentCatalogs":["string"],"name":{},"previewUrl":"string","uid":"FJ"},{"contentCatalogs":["string"],"name":{},"previewUrl":"string","uid":"CR"}]}

export const Header = () => {
    return (
        <div className="ui segment">
           <CMSComponentsForm/>
        </div>
    )
}

export const CMSComponentsForm=()=>{
    return (
        <form method="get" action="/app/page-components" className="ui form">
        <div className="ui centered grid">
            <div className="ui row">
                <div className="ui column">Site Id </div>
                <div className="ui two wide column">
                   <SelectDropDown input={sites.sites}/>
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