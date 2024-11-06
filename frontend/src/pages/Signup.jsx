import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { BottomWarning } from "../components/BottomWarning"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export const Signup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading text={"Sign up"} />
        <SubHeading text={"Enter your infromation to create an account"} />
        <InputBox onchange={(e)=>{
          setFirstName(e.target.value);
        }} placeholder="John" text={"First Name"} />
        <InputBox onchange={(e)=>{
          setLastName(e.target.value);
        }} placeholder="Doe" text={"Last Name"} />
        <InputBox onchange={(e)=>{
          setUsername(e.target.value);
        }} placeholder="harkirat@gmail.com" text={"Email"} />
        <InputBox onchange={(e)=>{
          setPassword(e.target.value);
        }} placeholder="123456" text={"Password"} />
        <div className="pt-4">
          <Button onclick={async () => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
              username,
              firstName,
              lastName,
              password 
            });
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }} text={"Sign up"} />
        </div>
        <BottomWarning text={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}