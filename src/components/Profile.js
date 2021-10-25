import React, { Component } from 'react'
import ProfileDataService from '../services/profile.service'

export default class Profile extends Component{
    constructor(props) {
        super(props);
        this.retrieveProfile = this.retrieveProfile.bind(this);
    
        this.state = {
          profile: [],
        };
    }

    componentDidMount() {
        this.retrieveProfile();
      }

    retrieveProfile(){
        ProfileDataService.get()
            .then(response => {
            this.setState({
                profile: response.data.data
            });
            })
        .catch(e => {
            console.log(e);
        });
    }

    render(){

        const { profile } = this.state;

        return(
            <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
                <div className="my-auto">
                <h1 className="mb-0">{profile.first_name}
                    <span className="text-primary ml-3">{profile.last_name}</span>
                </h1>
                <div className="subheading mb-5">{profile.address} · {profile.phone} ·
                    <a href={"mailto:"+profile.email}>{profile.email}</a>
                </div>
                <p className="mb-5">{profile.description}.</p>
                <ul className="list-inline list-social-icons mb-0">
                    <li className="list-inline-item">
                    <a href="#">
                        <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    </li>
                    <li className="list-inline-item">
                    <a href="https://www.instagram.com/wantrisnadi/">
                        <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-instagram fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    </li>
                    <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/wantrisnadi-gusti-a16a08142/">
                        <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    </li>
                    <li className="list-inline-item">
                    <a href="https://github.com/wantris">
                        <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    </li>
                </ul>
                </div>
            </section>
        )
    }
}
