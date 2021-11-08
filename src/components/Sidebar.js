import React, {Component} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ProfileDataService from '../services/profile.service'

export default class Sidebar extends Component{
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
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none">Start Bootstrap</span>
                    <span className="d-none d-lg-block">
                    <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile.photo} alt="" />
                    </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <AnchorLink className="nav-link js-scroll-trigger" href="#about">About</AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink className="nav-link js-scroll-trigger" href="#experience">Experience</AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink className="nav-link js-scroll-trigger" href="#education">Education</AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink className="nav-link js-scroll-trigger" href="#skills">Skills</AnchorLink>
                        </li>
                        <li className="nav-item">
                            <AnchorLink className="nav-link js-scroll-trigger" href="#projects">Projects</AnchorLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }   
}
