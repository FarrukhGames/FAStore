const Auth = () => {
    return (
        <form className="form">
            <h2>Log In</h2>
            <hr/>
            <div className="form__log-in">
                <input placeholder="E-Mail" type="email"/>
                <input placeholder="Password" type="password"/>
                <button className="Log-in">Log In</button>
            </div>
        </form>
    )
}

export default Auth;