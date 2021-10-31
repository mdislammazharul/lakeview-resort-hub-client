import React, { useRef } from 'react';

const AddServices = () => {
    const idRef = useRef();
    const nameRef = useRef();
    const imgRef = useRef();
    const careTeamRef = useRef();
    const descriptionRef = useRef();
    const costRef = useRef();

    const handleAddUser = e => {
        const idString = idRef.current.value;
        const id = parseInt(idString);
        const name = nameRef.current.value;
        const careTeam = careTeamRef.current.value;
        const img = imgRef.current.value;
        const description = descriptionRef.current.value;
        const cost = costRef.current.value;

        if (id !== "null" && name !== "" && careTeam !== "" && description !== "" && img !== "" && cost !== "") {
            const newUser = { id, name, careTeam, description, img, cost };
            fetch('https://scary-wizard-25137.herokuapp.com/services', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        alert('User added Successfully.')
                        e.target.reset();
                    }
                })
            e.preventDefault();
        }
        else {
            alert('Please Fill All the Information')
        }

    }
    return (
        <div className="m-5 d-flex justify-content-center">
            <form onSubmit={handleAddUser}>
                <div class="mb-3">
                    <label for="exampleInputText" class="form-label">Service ID (only integer numbers)</label>
                    <input type="text" class="form-control" id="exampleInputText" aria-describedby="textHelp" ref={idRef} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputText" class="form-label">Service Image Link</label>
                    <input type="text" class="form-control" id="exampleInputText" aria-describedby="textHelp" ref={imgRef} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputText" class="form-label">Service Name</label>
                    <input type="text" class="form-control" id="exampleInputText" ref={nameRef} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputText" class="form-label">Service Country</label>
                    <input type="text" class="form-control" id="exampleInputText" ref={careTeamRef} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputText" class="form-label">Service Cost</label>
                    <input type="text" class="form-control" id="exampleInputText" ref={costRef} />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea3">Service Description</label>
                    <textarea cols="50" class="form-control" id="exampleFormControlTextarea3" rows="7" ref={descriptionRef}></textarea>
                </div>
                <button type="submit" class="my-4 btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddServices;