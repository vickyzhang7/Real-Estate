import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <button 
            className="cursor-pointer ml-auto [border:none] py-2 px-2.5 bg-primaryblue-500 rounded-lg"
            onClick={() => logout()}>
                <div className="relative font-medium font-poppins text-white">
                    logout
                </div>
            </button>
        )
    )
}

export default LogoutButton