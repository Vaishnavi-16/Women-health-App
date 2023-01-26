import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Client, Account, ID } from "appwrite";

const SignupForm = () => {
    const [isSignedUp, setIsSignedUp] = useState(false)

    const handleSignup = (event) => {
        event.preventDefault()

        const nameInput = event.target.elements.name
        const emailInput = event.target.elements.email
        const passwordInput = event.target.elements.password
        const name = nameInput.value
        const email = emailInput.value
        const password = passwordInput.value

        const client = new Client().setEndpoint('http://localhost/v1').setProject('63a70dd0b29b8cc8e592')

        const account = new Account(client);

        const promise = account.create(
            ID.unique(),
            email,
            password,
            name
        );

        promise.then(function (response) {
            console.log(response);
            setIsSignedUp(true)
        }, function (error) {
            console.log(error);
        });


    }
    if (isSignedUp) {
        return <Navigate to="/login" />
    }
    return (
        <form onSubmit={handleSignup} style={{paddingTop:"8rem"}}>
            <input type="text" name="name" className="border rounded w-full py-2 px-3 mb-4" placeholder="Name" />
            <input type="email" name="email" className="border rounded w-full py-2 px-3 mb-4" placeholder="Email" />
            <input type="password" name="password" className="border rounded w-full py-2 px-3 mb-4" placeholder="Password" />
            <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
    )
}

export default SignupForm
