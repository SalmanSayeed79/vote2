import React from 'react'
import './styles/winner.css'

export default function Winner({key, position ,data}) {
    return (
        <div className="winner">
            <h5>{position}</h5>

            <div className="title">
                <h3>{data.name}</h3>
                <h4>{data.dept}</h4>
            </div>
            
            <h2>{data.votes}<span>Votes</span></h2>
        </div>
    )
}
