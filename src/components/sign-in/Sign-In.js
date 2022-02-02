import './Sign-In.scss'
import {useState} from "react";
import FormInput from "../form-input/Form-Input";
import CustomButton from "../custom-button/CustomButton";
import {emailSignInStart, googleSignInStart} from "../../redux/user/user.action";
import {connect} from "react-redux";

const SignIn = ({emailSignInStart, googleSignInStart}) => {
    const [userCredentials, setUserCredentials] = useState({email: '', password: ''});

    const {email, password} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const {value, name} = event.target;
        setUserCredentials({...userCredentials, [name]: value});
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    handleChange={handleChange}
                    value={password}
                    label='password'
                    required
                />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with
                        Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);
