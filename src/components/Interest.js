import React, { Component } from 'react'
import ProjectDataService from '../services/project.service'

export default class Interest extends Component {
    constructor(props) {
        super(props);
        this.retrieveProject = this.retrieveProject.bind(this);

        this.state = {
            project: [],
        };
    }

    componentDidMount() {
        this.retrieveProject();
    }

    retrieveProject() {
        ProjectDataService.get()
            .then(response => {
                this.setState({
                    project: response.data.data
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { project } = this.state;


        function previewImage(e) {
            const id = e.target.id;
            var modal = document.getElementById("myModal");
            var img = document.getElementById("img-project_" + id);
            var modalImg = document.getElementById("img01");

            // console.log(modalImg);

            modal.style.display = "block";
            modalImg.src = e.target.src;

        }

        function closePreview(e) {
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
        }


        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
                <div className="my-auto">
                    <h2 className="mb-5">Project</h2>

                    {project.map((item, index) => (
                        <div className="row mb-4">
                            <div className="col-lg-8 col-12">
                                <h3 className="mb-0">{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                            <div className="col-lg-4 col-12">
                                <span className="text-primary">{item.date_start} - {item.date_end}</span>
                            </div>
                            <div className="col-lg-12 col-12 text-center">
                                <img className="img-fluid img-project mt-3" id={"img-project_" + item.id} alt={item.title} src={item.photo} onClick={previewImage}></img>
                            </div>
                        </div>
                    )
                    )

                    }

                </div>

                <div id="myModal" class="modal-project">
                    <span class="close-project" onClick={closePreview}>&times;</span>
                    <img class="modal-content-project" id="img01" />
                    <div id="caption-project"></div>
                </div>
            </section>

        )
    }
}