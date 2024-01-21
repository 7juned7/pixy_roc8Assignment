import React from 'react'
import "./../App.css"
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <h2>Homepage</h2>
                <div className="user">
                    <div className="btn login">Login</div>
                    <div className="btn create_account ">Create Account</div>
                </div>
            </div>
        </>
    )
}

export default Navbar