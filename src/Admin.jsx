import React from "react";
import "./styles.css"

export default function Admin(){
    const [user, setUser] = React.useState("")
    const [pass, setPass] = React.useState("")

    function handleSubmit(e){
        e.preventDefault()
    }

    return(
        <div className="bg-[#384264] h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col text-center content-center bg-white rounded-md px-8 py-20">
                <h2>Admin Only</h2>
                <label>
                    <input type="text" placeholder="username" value={user}
                    onChange={(e) => setUser(e.target.value)}></input>
                </label>
                <label>
                    <input type="password" placeholder="password" value={pass}
                    onChange={(e) => setPass(e.target.value)}></input>
                </label>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}
