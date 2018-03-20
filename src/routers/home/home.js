import React, { Component } from 'react';
import './home.css';
import Menubar from './component/menubar/menubar';
import UserInfo from './component/userinfo/userinfo';
import fakeAuth from '../../config/checkAuth';
import { withRouter } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.doLogout = this.doLogout.bind(this);
    }
    doLogout() {
        fakeAuth.signout(() => this.props.history.push('/login'));
    }
    render() {
        return (
            <div>
                <div className="home_nav">
                    <div className="home_logo_bar">
                        <img src={require('../../assets/imgs/home_logo.png')} alt="" />
                        <div className="row home_logo_right">
                            <button className="lang_btn">
                                <img className="lang_img" src={require('../../assets/imgs/ge.jpg')} width='25' alt="" />
                                DE
                            </button>
                            <button className="lang_btn">
                                <img className="lang_img" src={require('../../assets/imgs/en.jpg')} width='25' alt="" />
                                EN
                            </button>
                            <button className="lang_btn" onClick={this.doLogout}>
                                LOGOUT
                            </button>
                        </div>
                    </div>
                    <Menubar />
                    {/* <UserInfo /> */}
                </div>
                <div className="home_content">

                </div>
                <div className="home_footer">
                    <div className="home_footer_top">
                        <span className="home_footer_desc">
                            This is a demo version of Enkyon Service and expires on (Date). To purchase the full Enkyon version, please click here.
                        </span>
                        <img className="home_footer_paypal" src={require('../../assets/imgs/paypal.png')} height="40" alt="" />
                    </div>
                    <div className="home_footer_bottom">
                        <span className="home_footer_web">
                            EnkyOn Web Platform
                        </span>
                        <span className="home_footer_copyright">
                            Copyright (c) 2018 HS0Security Ware GmbH. All rights reserved.
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;