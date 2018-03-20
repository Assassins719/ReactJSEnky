import React, { Component } from 'react';
import axios from 'axios'
import { BeatLoader } from 'react-spinners';

import Home from '../home/home';
import './loginuser.css';
import base_url from '../../config/baseurl';
import fakeAuth from '../../config/checkAuth';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

class LoginUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            email: "",
            pwd: "",
            code: "",
            loading: false,
        };
        this.doLogin = this.doLogin.bind(this);
    }
    onEmailChange(e) {
        console.log(e.target.value);
        this.setState({ email: e.target.value });
    }
    onPwdChange(e) {
        this.setState({ pwd: e.target.value });
    }
    onCodeChange(e) {
        this.setState({ code: e.target.value });
    }
    //tester@test.com
    //10291029
    doLogin() {
        this.setState({loading:true});
        console.log(this.state.email, this.state.pwd, this.state.code, base_url);
        if (this.setState.email !== '' && this.state.pwd !== '') {
            var self = this;
            axios.post(base_url.api_url + "users/login", { email: this.state.email, password: this.state.pwd })
                .then(function (response) {
                    self.setState({loading:false});
                    if (response.status === 200) {
                        console.log("Success");
                        fakeAuth.authenticate(() => {
                            self.setState({ redirectToReferrer: true });
                        });
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    self.setState({loading:false});
                });
        }else{
            this.setState({loading:false});
        }
    }
    render() {
        const { from } = this.props.location.state || { from: { pathname: "/home" } };
        const { redirectToReferrer } = this.state;
        if (redirectToReferrer) {
            console.log(from);
            return <Redirect to={from} />;
        }
        return (
            <div className="container_user">
                <div align="center" className="login_container">
                    <img src={require('../../assets/imgs/loginicon.png')} alt="" />
                    <h1>Member login</h1>
                    <div className="login_input_form">
                        <img src={require('../../assets/icons/icon_user.png')} alt="" />
                        <input className="login_input_field" type="email" placeholder="Username" value={this.state.email}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.doLogin();
                                }
                            }}
                            onChange={this.onEmailChange.bind(this)} />
                    </div>
                    <div className="login_input_form">
                        <img src={require('../../assets/icons/icon_pwd.png')} alt="" />
                        <input className="login_input_field" type="password" placeholder="Password" value={this.state.pwd}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.doLogin();
                                }
                            }}
                            onChange={this.onPwdChange.bind(this)} />
                    </div>
                    <div className="login_input_form">
                        <img src={require('../../assets/icons/icon_code.png')} alt="" />
                        <input className="login_input_field" type="text" placeholder="2FA" value={this.state.code} onChange={this.onCodeChange.bind(this)} />
                    </div>
                    <div className="row login_option_form_bottom">
                        <div className=" forgot_span">
                            <label className="container_chk">Remember me
                                <input type="checkbox" />
                                <div className="checkmark"></div>
                            </label>
                        </div>
                        <div className="forgot_span">
                            <img className="img_bottom" src={require('../../assets/icons/icon_email.png')} alt="" />
                            <label className="txt_options">Forgot Password?</label>
                        </div>
                    </div>
                    {this.state.loading && (
                        <button className="button" onClick={this.doLogin} >
                            <BeatLoader
                                color={'#fff'}
                            />
                        </button>
                    )}
                    {!this.state.loading && (
                        <button className="button" onClick={this.doLogin} >
                            <label
                                loading={this.state.loading}
                            >LOGIN</label>
                        </button>
                    )}


                </div>
            </div>
        );
    }
}

export default LoginUser;
