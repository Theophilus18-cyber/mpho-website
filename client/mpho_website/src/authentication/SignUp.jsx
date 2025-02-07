import {SignUp} from "@clerk/clerk-react"



export function Register(){
    return (
        <div>
            <SignUp signInUrl="/login" forceRedirectUrl={"/sign-in"}  />
        </div>


    )
}

