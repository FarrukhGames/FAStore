import React,{useState, useEffect} from 'react';

const Auth = (props) => {
    console.log("paint");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);
    useEffect(() => {
        setFormIsValid(enteredEmail.includes("@") && enteredPassword.length >= 6);
        console.log("form validation");
    },[enteredEmail, enteredPassword]);
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
        // setFormIsValid(event.target.value.includes("@") && enteredPassword.length >= 6);
    }
    const emailValidateHandler = () => {
        // console.log(enteredEmail.includes("@"));
        setEmailIsValid(enteredEmail.includes("@"));
    }
    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value); 
        // setFormIsValid(enteredEmail.includes("@") && event.target.value.length >= 6);
    }
    const passwordValidateHandler = (event) => {
        setPasswordIsValid(enteredPassword.length >= 6);
    }
    let formClasses = ["form", formIsValid === false ? "form-invalid" : ""];
    return (
        <form className={formClasses.join(" ")} noValidate onSubmit={props.loginFunction}>
            <h2>Log In</h2>
            <hr/>
            <div className="form__log-in">
                <input className={emailIsValid === true ? "" : "invalid"} placeholder="E-Mail" type="email" value={enteredEmail} onChange={emailChangeHandler} onBlur={emailValidateHandler}/>
                <input className={passwordIsValid === false ? "invalid" : ""} placeholder="Password" type="password" value={enteredPassword} onChange={passwordChangeHandler} onBlur={passwordValidateHandler}/>
                <button className="login" disabled={!formIsValid}>Log In</button>
            </div>
        </form>
    )
}

export default Auth;