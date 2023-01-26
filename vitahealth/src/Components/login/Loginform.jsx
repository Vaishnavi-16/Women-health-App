import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Client, Account } from "appwrite";

const LoginForm = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const client = new Client();

    client
        .setEndpoint('http://localhost/v1') //  API Endpoint
        .setProject('63a70dd0b29b8cc8e592') //  project ID
        ;
    const account = new Account(client);
    const handleLogin = (event) => {
        event.preventDefault()
        const emailInput = event.target.elements.email
        const passwordInput = event.target.elements.password
        const email = emailInput.value
        const password = passwordInput.value

        account.createEmailSession(email, password)
            .then((response) => {
                console.log('logged In')
                setIsLoggedIn(true)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    if (isLoggedIn) {
        return <Navigate to="/chat" />
    }

    return (
        <form onSubmit={handleLogin} style={{paddingTop:"8rem"}}>
            <input type="email" name="email" className="border rounded w-full py-2 px-3 mb-4" placeholder="Email" />
            <input type="password" name="password" className="border rounded w-full py-2 px-3 mb-4" placeholder="Password" />
            <button type="submit" className="btn btn-primary">Log In</button>
        </form>
    )
}

export default LoginForm
