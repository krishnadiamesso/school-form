import React, { useState } from "react";

function StudentForm() {
    const [userInput, setUserInput] = useState({
        email: "",
        firstname: "",
        lastname: "",
        age: "",
        address: "",
        classNumber: "",
        studentID: "",
        lunch: "",
    });

    function handleUserInput(e) {
        const { name, value } = e.target;
        setUserInput(prevState => ({
            ...prevState,
            [name]: name === 'age' ? parseInt(value) : value
        }));
    }

    return (
        <>
            <div>
                <h2>School Administration Form.</h2>
                <form>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            onChange={handleUserInput}
                            value={userInput.email}
                        />
                    </div>
                    <div>
                        <label htmlFor="firstname">First Name: </label>
                        <input
                            id="firstname"
                            name="firstname"
                            type="text"
                            onChange={handleUserInput}
                            value={userInput.firstname}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastname">Last Name: </label>
                        <input
                            id="lastname"
                            name="lastname"
                            type="text"
                            onChange={handleUserInput}
                            value={userInput.lastname}
                        />
                    </div>
                    <div>
                        <label htmlFor="age">Age: </label>
                        <input
                            id="age"
                            name="age"
                            type="text"
                            onChange={handleUserInput}
                            value={userInput.age}
                        />
                    </div>
                    <div>
                        <label htmlFor="address">Address: </label>
                        <input
                            id="address"
                            name="address"
                            type="text"
                            onChange={handleUserInput}
                            value={userInput.address}
                        />
                    </div>
                    <div>
                        <label htmlFor="classNumber">Class Number: </label>
                        <input
                            id="classNumber"
                            name="classNumber"
                            type="text"
                            onChange={handleUserInput}
                            value={userInput.classNumber}
                        />
                    </div>
                    <div>
                        <label htmlFor="studentID">Student ID: </label>
                        <input
                            id="studentID"
                            name="studentID"
                            type="text"
                            onChange={handleUserInput}
                            value={userInput.studentID}
                        />
                    </div>
                </form>
                <form onChange={handleUserInput}>
                    <legend>Select a Lunch:</legend>

                    <div>
                        <input type="radio" id="chicken" name="lunch" value="chicken" />
                        <label htmlFor="chicken">Chicken</label>
                    </div>

                    <div>
                        <input type="radio" id="salmon" name="lunch" value="salmon"/>
                        <label htmlFor="salmon">Salmon</label>
                    </div>

                    <div>
                        <input type="radio" id="turkey" name="lunch" value="turkey"/>
                        <label htmlFor="turkey">Turkey</label>
                    </div>
                </form>
            </div>
            <div>
                <h2>Current User Input: </h2>
                <p>Email: {userInput.email}</p>
                <p>First Name: {userInput.firstname}</p>
                <p>Last Name: {userInput.lastname}</p>
                <p>Age: {userInput.age}</p>
                <p>Address: {userInput.address}</p>
                <p>Class Number: {userInput.classNumber}</p>
                <p>Student ID: {userInput.studentID}</p>
                <p>Lunch: {userInput.lunch}</p>
            </div>
        </>
    );
}

export default StudentForm;
