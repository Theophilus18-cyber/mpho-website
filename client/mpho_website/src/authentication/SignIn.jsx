import { SignIn } from "@clerk/clerk-react";

function Login() {
    return (
        <div>
            <SignIn signUpUrl="/sign-up" afterSignInUrl="/dashboard" />
        </div>
    );
}

export default Login
