import React, { Component } from 'react'
import EducationDataService from '../services/education.service'

export default class Education extends Component{
    constructor(props) {
        super(props);
        this.retrieveEducation = this.retrieveEducation.bind(this);
    
        this.state = {
          education: [],
        };
    }

    componentDidMount() {
        this.retrieveEducation();
      }

    retrieveEducation(){
        EducationDataService.get()
            .then(response => {
                this.setState({
                    education: response.data.data
                });
            })
        .catch(e => {
            console.log(e);
        });
    }

    render(){

        const { education } = this.state;

        return(
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
                <div className="my-auto">
                <h2 className="mb-5">Education</h2>

                {education.map((item, index) => (
                        <div key={item.id} className="resume-item d-flex flex-column flex-md-row mb-5">
                            <div className="resume-content mr-auto">
                            <h3 className="mb-0">{item.title}</h3>
                            <div className="subheading mb-3">{item.major}</div>
                            <div>{item.description}</div>
                            <p>GPA: {item.final_score}</p>
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