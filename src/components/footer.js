import React from 'react'


import './app1.css'

const Footer=()=>{
    return(
        
        <div className="main-footer">
       
                <div className="row">
                <div className="col">
                    <h2>  Contact Us</h2>
                    <ul className="list-unstyled">
                        <li>Phone Number :7050678578</li>
                        <li>Phone Number :7768465730</li>
                        <li>EmailId :farmer2@gmail.com </li>
                       
                    </ul>
                </div>
                <div className="col">
                    <h2>You Can join us </h2>
                    <ul className="list-unstyled">
                        <li>Youtube : FarmerAssistance</li>
                        <li>Instagrame : @me.farmer</li>
                        <li>twitter : @me.farmer</li>
                    </ul>
                </div>
                </div>
                <hr/>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear} All rights reserved!
                    </p>
                </div>
            </div>
            
    
    )
}

export default Footer