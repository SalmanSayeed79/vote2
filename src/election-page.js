import React,{useState,useEffect} from 'react'
import './styles/electionPage.css'
import Candidate from './candidate'
import {Link} from 'react-router-dom'
import './styles/modal.css'
import { db } from './firebase/firestore'
import firebase from 'firebase'


export default function ElectionPage(matchedData) {
    //getting all the url form the returned data
    let document_id=matchedData.match.params.id
    //console.log(matchedData)
    //console.log(document_id)
    //===========================MODAL FUNCTIONS=====================//

    function showModal(){
            let modal=document.querySelector("#add-candidate-modal");
            modal.classList.add("show-modal")
        }
    function hideModal(){
            let modal=document.querySelector("#add-candidate-modal");
            modal.classList.remove("show-modal")
        }



    //=====================GETTING CANDIDATE FUNCTION========================
        const [candidates,setCandidates]=useState([])
        let arr=[]
        function getCandidates(){
            db.collection('files').doc(document_id).collection("candidates").get()
                .then(res=>{
                    res.docs.forEach(a=>{
                        //console.log(a.data())
                        arr.push(a.data()) 
                    }
                    )
                    setCandidates(arr)
                    
                })

        }
        
        useEffect(()=>getCandidates(),[])
        console.log(candidates)
        
        




    
    //=====================ADDING CANDIDATE FUNCTION========================
        const createNewCandidate=(e)=>{
            e.preventDefault()
            let form=document.querySelector(".create-can-modal")
            // console.log(form.name.value)
            // console.log(form.dept.value)
            // console.log(form.details.value)
            db.collection("files").doc(document_id).collection("candidates").doc(form.name.value).set({
                name:form.name.value,
                dept:form.dept.value,
                details:form.details.value,
                votes:0
            })

            hideModal()
            getCandidates()
            
        }



    return (

        
     

        <div className="election-page">

            {/*======================modal==============================*/}
            <div className="modal-container" id="add-candidate-modal">
                    <div className="modal">
                        <h2>Add new candidate</h2>
                        <form className="create-can-modal" onSubmit={console.log("candidate created")}>
                            <input type="text" name="name" placeholder="Candidate Name"/>
                            <input type="text" name="dept" placeholder="Candidate Dept"/>
                            <textarea name="details" placeholder="Candidate details"/>
                            <button onClick={(e)=>createNewCandidate(e)}>Submit</button>
                        </form>
                        <p onClick={hideModal}>x</p>
                    </div>
            </div>


            <div className="top-bar">
                <div className="navbar">
                    <h1>Vote EM UP</h1>
                </div>
                <Link to='/home'><p> Go back </p></Link>
                <Link to={`/results/${document_id}`}><h6> See Results</h6></Link>
                <h2>Best footballer in the world</h2>
                
            </div>
            <div className="candidates" >
                {candidates.map(a=>(
                    <Candidate key={a.name} data={a} document_id={document_id}/>
                ))}
            </div>
            <button id="new_candidate" onClick={showModal}>Create new candidate</button>
            
        </div>
    )
}
