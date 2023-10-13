"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";


export default function signup() {
    const [user, setUser] = React.useState({
        email: '',
        password: '',
        username: ''
    })

    const onSignup = async () => {

    }

    return (
        <div className="text-center py-5">

            <h1>Sign Up Page- Register your User here :</h1>
            <hr />
            <label htmlFor="username">User Name</label>
            <br />
            <input className="p-1" color="red"
                id='username'
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="username"
            />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input className="p-1"
                id='email'
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input className="p-1"
                id='password'
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"
            />
            <br />
            <button onClick={onSignup} className="p-2 border border-gray-300
            rounded-lg mb-4 focus:outline:none
            focus:border-gray-600">
                SignUp
            </button>
        </div>
    )
}