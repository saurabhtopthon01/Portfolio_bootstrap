import React from 'react'
import laptop from '../images/laptop.png';

const About = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="new">
                <h1 className="display-4">About</h1>
                <div className="body">
                    <p>Saurabh is a web Developer with 3 years of experience.</p>
                    <p>Saurabh is a web Developer with 3 years of experience.</p>
                </div>
            </div>
            <div className="container row p-0 pt-5">
                <div className="col-lg-6">
                    <h1 className="display-5">Education</h1>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h4 className="card-title">IET-DAVV</h4>
                            <h5 className="card-subtitle mb-2 text-muted">Electronics and Instrumentation</h5>
                            <p className="text-muted fs-6 fw-lighter">Session: 2019-2023</p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h4 className="card-title">IET-DAVV</h4>
                            <h5 className="card-subtitle mb-2 text-muted">Electronics and Instrumentation</h5>
                            <p className="text-muted fs-6 fw-lighter">Session: 2019-2023</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5">Skills</h1>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Html</h5>
                            <h5 className="card-title">CSS</h5>
                            <h5 className="card-title">Javascript</h5>
                            <h5 className="card-title">React</h5>
                            <h5 className="card-title">RestApi</h5>
                            <h5 className="card-title">Adobe xd</h5>
                            <h5 className="card-title">Materail ui</h5>
                            <h5 className="card-title">Styled component</h5>
                            <h5 className="card-title">Bootstrap</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pb-5 pt-5">
                <h1 className="display-5">Project</h1>
                <div className="row">
                    <div className="card col-md-5 col-sm-12 bg-dark text-white mb-3 mx-auto">
                        <div className="row mb-3 mt-3">
                            <div className="col-lg-6 col-12">
                                <img src={laptop} alt="laptop" className="img-fluid px-3 px-md-0" />
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-5 col-sm-12 bg-dark text-white mb-3 mx-auto">
                        <div className="row mb-3 mt-3">
                            <div className="col-lg-6 col-12">
                                <img src={laptop} alt="laptop" className="img-fluid px-3 px-md-0" />
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 col-5 mx-auto bg-dark text-white d-none d-md-block">
                        <div className="row mb-3 mt-3">
                            <div className="col-lg-6 col-12">
                                <img src={laptop} alt="laptop" className="img-fluid" />
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 col-5 mx-auto bg-dark text-white d-none d-md-block">
                        <div className="row mb-3 mt-3">
                            <div className="col-lg-6 col-12">
                                <img src={laptop} alt="laptop" className="img-fluid" />
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
