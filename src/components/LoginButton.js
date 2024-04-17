import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <button 
            className="cursor-pointer ml-auto [border:none] py-2 px-2.5 bg-primaryblue-500 rounded-lg"
            onClick={() => loginWithRedirect()}>
                <div className="relative font-medium font-poppins text-white">
                    Login
                </div>
            </button>
        )
    )
}

export default LoginButton


