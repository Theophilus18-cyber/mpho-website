import { SignIn } from "@clerk/clerk-react";


export function Login() {
    return (
        <div>
            <SignIn signUpUrl="/sign-up" forceRedirectUrl={"/dashboard"} />
        </div>
    );
}

