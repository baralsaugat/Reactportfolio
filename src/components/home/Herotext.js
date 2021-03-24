import React from 'react'
import {Button, Container} from 'react-bootstrap'
import bg from '../../assets/profile.png'
import './herotext-style.css'

export const Herotext = () => {
    return (
        <>
        
        <div className= "intro"   >
           
            <div className = 'introdesc'>
            <h2>Hi there</h2>
            <h1>
            I am Saugat Baral
             </h1>
            <p> I am an enthusiastic, keen and inquisitive software developer with strong academic background, focused in innovation and best results.</p>
            <Button variant="info">Hire Me</Button>{' '}
            <Button variant="outline-info">Download CV</Button>{' '}

        </div>
        <div >
            <img src={bg} alt="profilepic"/>
        </div>
        
       
        
        </div>
        
            

        </>
    )
}
