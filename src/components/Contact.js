import React from 'react'

const Contact = () => {
    return (
        <div className="container row mt-5 mb-5">
            <div className="container col-lg-6">
                <div className="card" style={{ width:'18rem', margin:'auto', marginRight:'0'}}>
                    <div className="card-body">
                        <h5 className="card-title">Phone</h5>
                        <h6 className="card-subtitle mb-2 text-muted">+987654321</h6>
                    </div>
                </div>
                <div className="card mt-3" style={{ width:'18rem', margin:'auto', marginRight:'0'}}>
                    <div className="card-body">
                        <h5 className="card-title">Email</h5>
                        <h6 className="card-subtitle mb-2 text-muted">my@email</h6>
                    </div>
                </div>
                <div className="card mt-3" style={{ width:'18rem', margin:'auto', marginRight:'0'}}>
                    <div className="card-body">
                        <h5 className="card-title">Location</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Address</h6>
                        <p className="card-text">Some sample address.</p>
                    </div>
                </div>
            </div>
            <div className="container bg-dark text-white col-lg-6 col-md-6 rounded">
                <h2 className="fw-bolder text-center pt-3">Contact</h2>
                <div className="mb-3 pt-5">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="email" className="form-control text-warning" id="exampleFormControlInput1" placeholder="name" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput2" className="form-label">Email address</label>
                    <input type="email" className="form-control text-warning" id="exampleFormControlInput2" placeholder="abc@email" />
                </div>
                <div className="mb-3 pb-5">
                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="type your message"></textarea>
                </div>
                <div className="col text-center">
                    <button className="btn btn-light mb-5" type="submit" >Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
