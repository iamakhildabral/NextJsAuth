"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";


export default function loginpage() {
    const [user, setUser] = React.useState({
        email: '',
        password: '',
    })

    const onLogin = async () => {

    }

    return (
        <div className="text-center py-5">

            <h1>Login here to use the App :</h1>
            <hr />

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
            <br />
            <button onClick={onLogin} className="p-2 border border-gray-300
            rounded-lg mb-4 focus:outline:none
            focus:border-gray-600">
                Login Here
            </button>
        </div>
    )
}