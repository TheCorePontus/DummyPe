import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button"

export const TransferSuccessful = ()=>{
    const navigate = useNavigate();
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 pb-4">
            Transfer Successful !!
            <Button text={"Return to dashboard"} onclick={()=>{
                navigate("/dashboard")
            }}/>
        </div>
    </div>
</div>
}