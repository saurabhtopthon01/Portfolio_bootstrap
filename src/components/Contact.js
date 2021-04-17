import React,{useState} from 'react'

const Contact = () => {

    const [popup, setPopup]=useState(false);

    const handlePopup=()=>(setPopup(!popup))
    return (
        <div className="container row m-0 mt-5 mb-5">
            <div className="container col-lg-6 d-none d-md-block">
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
                <div className="card mt-3 mb-5" style={{ width:'18rem', margin:'auto', marginRight:'0'}}>
                    <div className="card-body">
                        <h5 className="card-title">Location</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Address</h6>
                        <p className="card-text">Some sample address.</p>
                    </div>
                </div>
            </div>
            <div className="container bg-dark text-white col-lg-6 col-md-6 col rounded">
                <h2 className="fw-bolder text-center pt-3">Contact</h2>
                <div className="mb-3 pt-5">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput2" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="abc@email" />
                </div>
                <div className="mb-3 pb-5">
                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="type your message"></textarea>
                </div>
                <div className="col text-center">
                    <button className="btn btn-light mb-5" type="submit" onClick={handlePopup}>Submit</button>
                    <div class={popup ? "modal fade":""}vid="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Understood</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
