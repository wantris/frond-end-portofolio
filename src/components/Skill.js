import React, { Component } from 'react'
import SkillDataService from '../services/skill.service'

export default class Skill extends Component {

    constructor(props) {
        super(props);
        this.retrieveSkill = this.retrieveSkill.bind(this);
    
        this.state = {
          skill: [],
        };
    }

    componentDidMount() {
        this.retrieveSkill();
      }

    retrieveSkill(){
        SkillDataService.get()
            .then(response => {
                this.setState({
                    skill: response.data.data
                });
            })
        .catch(e => {
            console.log(e);
        });
    }

    render(){
        const { skill } = this.state;

        return(
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
                <div className="my-auto">
                <h2 className="mb-5">Skills</h2>

                <div className="subheading mb-3">Programming Languages &amp; Tools</div>
                <ul className="list-inline list-icons">
                    <li className="list-inline-item">
                    <i className="devicons devicons-html5"></i>
                    </li>
                    <li className="list-inline-item">
                    <i className="devicons devicons-css3"></i>
                    </li>
                    <li className="list-inline-item">
                    <i className="devicons devicons-javascript"></i>
                    </li>
                    <li className="list-inline-item">
                    <i className="devicons devicons-jquery"></i>
                    </li>
                    <li className="list-inline-item">
                    <i className="devicons devicons-sass"></i>
                    </li>
                    <li className="list-inline-item">
                    <i className="devicons devicons-less"></i>
                    </li>
                    <li className="list-inline-item">
                    <i className="devicons devicons-bootstrap"></i>
                    </li>
                    <li className="list-inline-item">
                    <i className="devicons devicons-wordpress"></i>
                    </li>
                    <li className="list-inline-item">
                    <i className="devicons devicons-grunt"></i>
                    </li>
                    <li className="list-inline-item">
                    <i className="devicons devicons-gulp"></i>
                    </li>
                    <li className="list-inline-item">
                    <i className="devicons devicons-npm"></i>
                    </li>
                </ul>

                <div className="subheading mb-3">Other Skills</div>
                    <ul className="fa-ul mb-0">
                        {skill.map((item, index) => (
                            <li>
                                <i className="fa-li fa fa-check"></i>
                                {item.title}
                            </li>
                                )
                            )

                        }
                    </ul>
                </div>
            </section>
        )
    }
}