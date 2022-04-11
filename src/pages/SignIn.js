import React, {useState} from 'react';
import { Form, FormContainer, Input, Label, MainContainer, Title, SignInButton, GoogleButton, FacebookButton, CallToAction, RememberMe, Or, InputPassword, PasswordDiv } from "../styles/StyleSign";
import {Link as LinkRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import userActions from '../redux/actions/UserActions';
import GoogleSignIn from '../components/GoogleSignIn';
import FacebookSignIn from "../components/FacebookLogIn";

const SignIn = (props) => {

    const [shown, setShown] = useState(false)
    const switchShown = () => setShown(!shown);
    const [password, setPassword] = useState("")
    const onChange = ({currentTarget}) => {
        setPassword(currentTarget.value)
    }

    const signin = (event) => {
        event.preventDefault()

        const data = {
            email: event.target[0].value,
            password: event.target[1].value,
            remember: event.target[2].checked,
            from: "signin"
        }
        props.userLoging(data);
    }

    return (
        <MainContainer style={{ backgroundImage: `url('${process.env.PUBLIC_URL + '/assets/backgroundSignIn.png'}')`, backgroundSize: 'cover' }}>
            <FormContainer>
                <Form onSubmit={signin}>
                    <Title>Welcome Back!</Title>
                    <Label htmlfor="mail" >Email</Label>
                    <Input id="mail" type="email" />
                    <Label for="password" >Password</Label>
                    <PasswordDiv>
                    <Input
                    id="password"
                    type={shown ? 'text' : 'password'}
                    onChange={onChange}
                    value={password}
                    />
                    <button onClick={switchShown}>
                        {shown ?  <img src={process.env.PUBLIC_URL + "/assets/eye.png"} alt="eye" width={25}/> : <img src={process.env.PUBLIC_URL + "/assets/hiddenEye.png"} alt="hiddenEye" width={25}/>}
                    </button>
                    </PasswordDiv> 
                    <RememberMe>
                        <input type="checkbox" value={'true'} id="rememberMe" />
                        <Label htmlfor="rememberMe">Remember me</Label>
                    </RememberMe>
                    <SignInButton>
                        <button type="submit">Log In</button>
                    </SignInButton>
                    <Or>
                        <p> - or - </p>
                    </Or>
                    <GoogleSignIn />
                    <FacebookSignIn />
                    <CallToAction>Forgot your password? <a>click here</a></CallToAction>
                    <CallToAction>Don't have an account? <LinkRouter to={'/signup'}>click here</LinkRouter></CallToAction>
                </Form>
            </FormContainer>
        </MainContainer >
    );
}

const mapDispatchToProps = {
    userLoging: userActions.userLoging,
}

export default connect(null, mapDispatchToProps)(SignIn);