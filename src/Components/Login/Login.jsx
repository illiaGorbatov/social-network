import React from 'react';
import styled from "styled-components";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/formsControl";
import {requireField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginWrapper = styled.div`
  background-color: azure;
  grid-area: content;
  margin-left: 200px;
  text-align: center;
`;

const Centering = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const FormError = styled.div`
  color: red;
`;

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Centering>Login</Centering>
            <Field placeholder={'email'} name={'email'} component={Input} validate={[requireField]}/>
            <Centering>Password</Centering>
            <Field placeholder={'password'} name={'password'} component={Input} validate={[requireField]} type={'password'}/>
            <Centering>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/> remember me
            </Centering>
            <Centering>
                <button>Log in</button>
                {props.error && <FormError>{props.error}</FormError>}
            </Centering>
        </form>
    )
};

const ReduxLoginForm = reduxForm({form: 'Login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if (props.isAuth) return <Redirect to={'/profile'}/>

    return (
        <LoginWrapper>
            <Centering> Please, log in</Centering>
            <ReduxLoginForm onSubmit={onSubmit}/>

        </LoginWrapper>
    )
};

const mapStateToProps  = (state) => ({isAuth: state.auth.isAuth})

export default connect(mapStateToProps, {login, logout})(Login)