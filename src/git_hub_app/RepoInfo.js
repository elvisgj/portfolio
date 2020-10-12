import React from 'react'
import './resultTable.css'


export function RepoInfo(props) {
    return <div className='repo-div'>
        <h3 className='repo-name'>Name: {props.item.name}</h3>
        <div className='repo-des'>
            <p>Description: {props.item.description === null ? "No descriprtion provided" : props.item.description}</p>
        </div>
        <div className='repo-link-div'>
            <a className='repo-link' href={props.item.html_url} target="_blank" rel="noopener noreferrer">Open The Ripository</a>
        </div>
    </div>
}
