import React from "react";
import {
    Form,
    FormContainer,
    Input,
    Label,
    MainContainer
} from "../styles/StyleSingUp";
import UserAcctions from "../redux/actions/UserActions";
import { connect } from "react-redux"



export const SingUp = (props) => {

    const singup = (event) => {
        event.preventDefault(event)

        const data = {
            firstName: event.target[0].value,
            lastName: event.target[1].value,
            email: event.target[2].value,
            password: event.target[3].value,
            image: event.target[4].value,
            from: "signup"
        }
        props.userSingUp(data)
        console.log(data)
    }


    return (
        <MainContainer>
            <FormContainer>
                <Form onSubmit={singup}>
                    <Label htmlFor="name">Firt name</Label>
                    <Input id="name" />
                    <Label htmlFor="lastName" >Last name</Label>
                    <Input id="lastName" />
                    <Label htmlFor="mail" >Mail</Label>
                    <Input id="mail" type="email" />
                    <Label htmlFor="password" >Password</Label>
                    <Input id="password" type="password" />
                    <Label htmlFor="mail" >Url image</Label>
                    <Input id="email" />
                    <Input type="submit" />
                </Form>
            </FormContainer>
        </MainContainer >
    )


}
const mapDispatchToProps = {
    userSingUp: UserAcctions.userSingUp
}

const mapStateToProps = (state) => {
    return {
        user: state.UserReducer.user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingUp)