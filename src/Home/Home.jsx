import React, { useEffect, useState } from 'react'
import { Jumbotron } from 'reactstrap'
import './Home.css'

export default function Home(props) {
    const buttonName = props.buttonName
    const originalButtonName = "Start Using"

    const [logIn, setLogIn] = useState(true)

    const handleLogin = () => {
        setLogIn(true)
    }

    useEffect(() => {
        document.title = "Home || Mandip Timsina"
    })

    return (
        <div>
            {logIn ? (
                <div className="main-container ">
                    <h1 className='w-heading'>Welcome to the Course Management System</h1>
                    <p>This is developed by @Mandip Timsina for the learning purpose the backend is done in spring boot and frontend is done in react js</p>
                    <button className="create-button">
                        {buttonName ? buttonName : originalButtonName}
                    </button>
                </div>
            ) :
            (
                <div className="optional-div">
                    <h1>Please login into the System</h1>
                    <button className="create-button"
                    onClick={handleLogin}>
                        Login Button
                    </button>
                </div>
            )}
        </div>
    )
}
