import React, { useState } from "react";
import "../styles/App.css";

export default function App() {

    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme(prevThem => (prevThem === "light" ? "dark" : "light"))
    }
    return (
        <div className="App">
            <h1>Newton School</h1>
            <div>
                <form>
                    <label>UserName</label>
                    <input></input>
                    <label>Password</label>
                    <input></input>
                    <button onClick={toggleTheme}>Login</button>
                </form>
            </div>
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <input type="checkbox" id="switch" />
            <label for="switch" className="label">
                Toggle
            </label>
        </div>
    );
}
