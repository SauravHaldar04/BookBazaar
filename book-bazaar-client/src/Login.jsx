import { useNavigate } from "react-router-dom" // Import the useNavigate hook

export const description =
    "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account."

export function LoginForm() {
    const navigate = useNavigate() // Use the useNavigate hook instead of useRouter

    const handleLogin = () => {
        // Perform login logic here
        // Redirect to the desired page after successful login
        navigate("/dashboard") // Use navigate function to redirect
    }

    return (
       <div className="login-card">
            <h2>Login</h2>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
            <p>Or login with Google</p>
            <button>Login with Google</button>
            <p>Don't have an account? <a href="/signup">Sign up</a></p>
       </div>
        );
}
export default LoginForm
