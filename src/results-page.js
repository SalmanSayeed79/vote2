import React,{useState,useEffect} from 'react'
import './styles/resultsPage.css'
import Winner from './winner'
import {db} from './firebase/firestore'

export default function ResultsPage(res) {
    //console.log(res.match.params.id)
    let document_id=res.match.params.id
    const winners=[]
    const [winner,setWinner]=useState([])

    const getWinners=()=>{
        db.collection('files').doc(document_id).collection("candidates").orderBy('votes',"desc").get()
            .then(res=>{
                res.docs.forEach(a=>{
                    winners.push(a.data())
                })
                setWinner(winners)
            })
    }
    useEffect(()=>getWinners(),[])

    console.log(winner)
    return (
        
        <div className="results-page">
            <div className="top-bar">
                <div className="navbar">
                    <h1>Vote EM UP</h1>
                </div>
                <h2>Best footballer in the world</h2>
            </div>
            <div className="winners">
            {winner.map(a=>{
                let index=(winner.indexOf(a))
                return(
                <Winner key={a.name} position={index+1} data={a}/>
            )})}
            
            </div>
        </div>
    )
}
