import React,{useEffect,useState} from 'react'
import './styles/homeOut.css'
import home from './img/home.png'
import './styles/homeOut.css'
import './styles/modal.css'
import {Redirect} from 'react-router-dom'
import {db,auth} from './firebase/firestore'

export default function HomeOut() {

            
    //=================================================

    //Listening to auth change
    
    //================================================= 
        const [loggedin,setLoggedin]=useState(false)
        const listenToLogin=()=>{
            auth.onAuthStateChanged((user)=>{
                console.log('state changed')
                if(user){
                    setLoggedin(true)
                    return <Redirect to='/home'/>    
                }
                else{
                    console.log('no user')
                }

            })
        }

        useEffect(()=>listenToLogin(),[])
        
    //=================================================

    //Creating Modals account

    //================================================= 
        //modal functions
        function showCreateAccountModal(){
            let modal=document.querySelector("#create-account-modal");
            modal.classList.add("show-modal")
        }
        function hideCreateAccountModal(){
            let modal=document.querySelector("#create-account-modal");
            modal.classList.remove("show-modal")
        }
        //login modal functions
        function showLoginModal(){
            let modal=document.querySelector("#log-in-modal");
            modal.classList.add("show-modal")
        }
        function hideLoginModal(){
            let modal=document.querySelector("#log-in-modal");
            modal.classList.remove("show-modal")
        }

        
    //=================================================

    //Creating account  and logging in

    //================================================= 

    const createNewAccount =(e)=>{
        e.preventDefault();
        let email=document.querySelector(".new-can-modal").email.value;
        let password=document.querySelector(".new-can-modal").password.value;
        // console.log(email)
        // console.log(password)
        auth.createUserWithEmailAndPassword(email,password)
        console.log('created')
    }

    const logIn=(e)=>{
        e.preventDefault();
        let email=document.querySelector(".log-in-modal").email.value;
        let password=document.querySelector(".log-in-modal").password.value;
        console.log(email)
        console.log(password)
        auth.signInWithEmailAndPassword(email,password)
    }
    //=================================================

    //Redirecting if logged in

    //================================================= 
    if(loggedin){
        return <Redirect to='/home'/>
    }
  
    return(
        
        <div className="home-out">

            <div className="modal-container" id="create-account-modal">
                    <div className="modal">
                        <h2>Create New Account</h2>
                        <form className="new-can-modal" onSubmit={e=>createNewAccount(e)}>
                            <input type="text" name="name" placeholder="User Name"/>
                            <input type="email" name="email" placeholder="User Email"/ >
                            <input type="password" name="password" placeholder="User Password"/ >
                            <button>Submit</button>
                        </form>
                        <p onClick={hideCreateAccountModal}>x</p>
                    </div>
            </div>

            <div className="modal-container" id="log-in-modal">
                <div className="modal">
                    <h2>Log In</h2>
                    <form className="log-in-modal" onSubmit={e=>logIn(e)}>
                        <input type="email" name="email" placeholder="User Email"/ >
                        <input type="password" name="password" placeholder="User Password"/ >
                        <button>Submit</button>
                    </form>
                    <p onClick={hideLoginModal}>x</p>
                </div>
            </div>
        
        












            <div className="navbar">
                <h1>Vote EM UP</h1>
            </div>
            <div className="main-part">
                <div className="texts">
                    <h2>JOIN US</h2>
                    <p>And be a part of the best voting experience ever</p>
                    <div className="buttons">
                    
                        <h3 onClick={showCreateAccountModal}>Create Account</h3>
                      
                        <h3 onClick={showLoginModal}>Log In</h3>
                    </div>
                </div>

                <img src={home} />


            </div>

    
        </div>
    )
}
