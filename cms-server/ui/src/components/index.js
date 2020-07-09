import React from 'react'
import axios from 'axios'
import CMSComponentsForm from './CMSComponentsForm'

export const Header = () => {
    return (
        <div className="ui segment">
            <CMSComponentsForm />
        </div>
    )
}

export const SelectDropDown = (props) => {
    console.log(props)
    var data = props.input

    return (

        <select name={props.name} className="ui dropdown" onChange={props.onChange}>
            {data.map(el => <option key={`${el.uid}`} value={`${el.uid}`}>{el.uid}</option>)}
        </select>

    )
}

export const CatalogSelectDropDown = (props) => {
    console.log(props)
    return (

        <select name={props.name} className="ui dropdown">
            {props.input.map(el => <option key={`${el}`} value={`${el}`}>{el}</option>)}
        </select>

    )
}