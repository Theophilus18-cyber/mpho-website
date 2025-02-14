import {SignUp} from "@clerk/clerk-react"



function Register(){
    return (
        <div>
            <SignUp signInUrl="/login" forceRedirectUrl={"/sign-in"}  />
        </div>


    )
}

export default Register

