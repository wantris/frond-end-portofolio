import React, { Component } from 'react'
import ExperienceDataService from '../services/experience.service'

export default class Experience extends Component{

    constructor(props) {
        super(props);
        this.retrieveExperience = this.retrieveExperience.bind(this);
    
        this.state = {
          experience: [],
        };
    }

    componentDidMount() {
        this.retrieveExperience();
      }

    retrieveExperience(){
        ExperienceDataService.get()
            .then(response => {
                this.setState({
                    experience: response.data.data
                });
            })
        .catch(e => {
            console.log(e);
        });
    }

    render(){

        const { experience } = this.state;

        return(
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
                    <div className="my-auto">
                    <h2 className="mb-5">Experience</h2>

                    {experience.map((item, index) => (
                        <div key={item.id} className="resume-item d-flex flex-column flex-md-row mb-5">
                            <div className="resume-content mr-auto">
                            <h3 className="mb-0">{item.title}</h3>
                            <div className="subheading mb-3">{item.company}</div>
                            <p>{item.description}</p>
                            </div>
                            <div className="resume-date text-md-right">
                            <span className="text-primary">{item.date_start} - {item.date_end}</span>
                            </div>
                        </div>
                            )
                        )

                    }

                    </div>

                </section>
        )
    }
}
