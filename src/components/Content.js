import React, { Component } from 'react'
import Profile from "./Profile";
import Experience from "./Experience";
import Education from './Education';
import Skill from './Skill';
import Interest from './Interest';


export default class Content extends Component {
    render(){
        return(
            <div className="container-fluid p-0">
                
                {/* Profile component */}
                <Profile/>

                {/* Experience */}
                <Experience/>

                {/* Education */}
                <Education/>

                {/* Skill */}
                <Skill/>

                {/* Interest */}
                <Interest/>

            </div>
        )
    }
}