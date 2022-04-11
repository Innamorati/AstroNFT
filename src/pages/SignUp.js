import React from "react";
import { Form, FormContainer, Input, Label, MainContainer, Title, SignUpButton, GoogleButton, FacebookButton, CallToAction } from "../styles/StyleSign";
import UserActions from "../redux/actions/UserActions";
import { connect } from "react-redux";
import { Link as LinkRouter } from 'react-router-dom';
import GoogleSignUp from "../components/GoogleSignUp";
import FacebookSignUp from "../components/FacebookSignUp";

export const SignUp = (props) => {

    const signup = (event) => {
        event.preventDefault(event)

        const data = {
            firstName: event.target[0].value,
            lastName: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value,
            image: event.target[4].value,
            from: "signup",
            google: false,
        }
        props.userSignUp(data)
        console.log(data)
    }


    return (
        <MainContainer style={{ backgroundImage: `url('${process.env.PUBLIC_URL + '/assets/signUpBackground.png'}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <FormContainer>
                <Form onSubmit={signup}>
                    <Title>Sign up</Title>
                    <Label for="name">First name</Label>
                    <Input id="name" />
                    <Label htmlFor="lastName" >Last name</Label>
                    <Input id="lastName" />
                    <Label htmlFor="mail" >Email</Label>
                    <Input id="mail" type="email" />
                    <Label htmlFor="password" >Password</Label>
                    <Input id="password" type="password" />
                    {/* <Label>Repeat Password</Label>
                    <Input type="password" name="confirm_password" id="confirm_password" /> */}
                    <Label for="mail" >URL Profile Picture</Label>
                    <Input id="mail" />
                    <SignUpButton>
                        <button type="submit">Register</button>
                    </SignUpButton>
                    {/* <p>- or -</p> */}
                    <GoogleSignUp />
                    <FacebookSignUp />
                    <CallToAction>If you already have an account <LinkRouter to={'/signin'}>click here</LinkRouter></CallToAction>
                </Form>
            </FormContainer >
        </MainContainer >
    )


}
const mapDispatchToProps = {
    userSignUp: UserActions.userSignUp,
}

const mapStateToProps = (state) => {
    return {
        user: state.UserReducer.user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)