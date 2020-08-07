import React from 'react';
import './styles/cards.css'
import ElectionPage from './election-page';
import { render } from '@testing-library/react';


export default function Cards(props) {
    let electionData=props.data
    const goToElection=()=>{
        console.log('clicked')
       
    }
    console.log(props.data)

    return (
        <div className="cards">
            <div>{props.data.active? <p>Active</p>:<p>Completed</p> }</div>
            <h2 onClick={goToElection}>{props.data.name}</h2>
            <div className="creation">
                <h4>Created by: User</h4>
                <h4>Created on: 17-6-2020</h4>
            </div>

            <div className="bottom-bar">
                <h3>{5} <span>Candidates</span></h3>
                <h3>5 <span>Voters</span></h3>
                <h3>5 <span>Dates</span></h3>
            </div>
            
        </div>
    )
}
