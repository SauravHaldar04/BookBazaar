function SignUpForm (){
    return(
        <div className="signup-card">
            <h2>Sign Up</h2>
            <div className="name-div" >
            <input type="text" className="first-name" placeholder="First Name" />
            <input type="text" className="last-name" placeholder="Last Name" />
            </div>
            <input type="text"className="email" placeholder="Email" />
            <input type="password" className="pass" placeholder="Password" />
            <input type="password" className="pass" placeholder="Confirm Password" />
            <button>Sign Up</button>
            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    );
}
export default SignUpForm;