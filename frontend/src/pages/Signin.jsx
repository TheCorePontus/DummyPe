import axios from "axios"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Signin = ()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 pb-5">
            <Heading text={"Sign In"}/>
            <SubHeading text={"Enter your credentials to access your account"}/>
            <InputBox onchange={(e)=>{
                setUsername(e.target.value)
            }} text={"Email"} placeholder={"Johnsmith@gmail.com"}/>
            <InputBox onchange={(e)=>{
                setPassword(e.target.value)
            }} text={"password"} placeholder={"123456"} />
            <Button onclick={async ()=>{
                const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                    username,
                    password
                })
                localStorage.setItem("token", response.data.token)
                navigate("/dashboard")
            }} text={"Sign In"}/>
            <BottomWarning text={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"}/>
            </div>
        </div>
    </div>
}
