import React,{useEffect, useState} from 'react';
import './styles/homeOn.css';
import './styles/modal.css'
import Cards from './cards'
import {Link, Redirect} from 'react-router-dom'
import {useQuery} from 'react-query'

import {db,auth} from './firebase/firestore'

export default function HomeOn() {

     //=================================================

    //Getting data

    //================================================= 
        
        //declaring states
        const [data,setData]=useState([]);
        const [submit,setSubmit]=useState('false');


        const getData=()=>{
            db.collection('files').get()
            .then(data=>{
                setData(data.docs.map(a=>a.data()))
            })
        
            
        }
        useEffect(()=>{
            getData();
            console.log(data);
        },[])
        
        
     //=================================================

    //Logging out user

    //================================================= 
        const [loggedin,setLoggedin]=useState(true)
        const logUserOut=()=>{

            auth.signOut()
            console.log("logged out")
            setLoggedin(false)
            
        }
        if(!loggedin){
            return(<Redirect to='/'/>)
        }else{

        }
         //=================================================

        // Creating new cards

        //=================================================
        const addData=(e)=>{
            e.preventDefault();
            let form=document.querySelector(".new-can-modal")
            console.log(form.election_name.value)
            db.collection('files').doc(form.election_name.value).set({
                active: true,
                name:form.election_name.value,
                // candidates:[
                //     {
                //         dept:form.candidate_dept.value,
                //         name:form.candidate_name.value,
                //         details:form.candidate_details.value,
                //         votes:0,
                //         voters:[]
                //     }
                // ]
            })
            alert("New Election Added")
            hideNewElectionModal()
            getData();
        }


 //=================================================

  //UI

  //=================================================



    //modal functions
    function showNewElectionModal(){
        let modal=document.querySelector("#new-election-modal");
        modal.classList.add("show-modal")
    }
    function hideNewElectionModal(){
        let modal=document.querySelector("#new-election-modal");
        modal.classList.remove("show-modal")
    }
    
    return (

        
        <div className="home-on">
            
            <div className="modal-container" id="new-election-modal">
                <div className="modal">
                    <h2>Create New Election</h2>
                    <form className="new-can-modal" onSubmit={e=>addData(e)}>
                        <input type="text" name="election_name" placeholder="Election Name"/>
                        <button>Submit</button>
                    </form>
                    <p onClick={hideNewElectionModal}>x</p>
                </div>
            </div>
        
            
            
            <div className="navbar">
                <h1>Vote EM UP</h1>
                <div className="others">
                    <h2 id="log-out-button" onClick={logUserOut}>Log Out</h2>
                    <h2 >Welcome, <span id="user-name">User</span></h2>
                </div>
            </div>
            <div className="new-election" onClick={showNewElectionModal}>
                <h3>Create New Election <span>+</span></h3>
            </div>
            

            <div className="card-container">
        
            {data.map(a=>(  
                <Link to={`/home/${a.name}`} style={{textDecoration:'none' }}><Cards  key={a.name} data={a}/></Link>
                ))}
                
              
            </div>
        </div>
    )
}





     














