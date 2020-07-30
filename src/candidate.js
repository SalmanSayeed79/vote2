import React from 'react'
import './styles/candidate.css'
import { db } from './firebase/firestore'

export default function Candidate({ data,document_id}) {
    const addVote=()=>{
        //adding the vote
            let currentVote=data.votes;
            let newVote=currentVote+1
            console.log(currentVote)
            console.log(document_id)
            db.collection('files').doc(document_id).collection("candidates").doc(data.name).update({
                votes :newVote
            })
           
        }
    
    
    return (
    
        <div className="candidate">
            <div className="title">
                <h3>{data.name}</h3>
                <h4>{data.dept}</h4>
            </div>
            <p>{data.details}</p>
            <h2 id={`vote-button${data.name}` }onClick={addVote}>Vote</h2>
        
        </div>
    )
}
