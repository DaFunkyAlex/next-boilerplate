import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';

import styler from '../../helpers/styler';

class Login extends React.Component {

    state = {
        email: '',
        password: '',
        remember_me: false,
    };


    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    login = (event) => {
        event.preventDefault();
        this.props.authenticate();

    };

    render() {
        return (
            <div>
                <div className={styler(["login"])}>
                    <div className={styler(["card", "position-center"])}>
                        <form>
                            <div className={styler(["card-header"])}>
                                <h2 className={styler(["font-weight-lighter"])}>{this.props.dashboardName} Login</h2>
                            </div>
                            <div className={styler(["card-body"])}>
                                <div className={styler(["margin"])}>
                                    <label className={styler(["form-label"])}>E-Mail Adresse:</label>
                                    <div className={styler(["inline", "width-1-1"])}>
                                        <span className={styler(["form-icon"])}><FontAwesomeIcon icon={"user"}/></span>
                                        <input className={styler(["input"])} type="email" name="email" placeholder="Ihre E-Mail Adresse" value={this.state.email} onChange={this.handleInputChange} required/>
                                    </div>
                                </div>

                                <div className={styler(["margin"])}>
                                    <label className={styler(["form-label"])}>Passwort:</label>
                                    <div className={styler(["inline", "width-1-1"])}>
                                        <span className={styler(["form-icon"])}><FontAwesomeIcon icon={"key"}/></span>
                                        <input className={styler(["input"])} type="password" name="password" placeholder="Ihr Passwort" value={this.state.password} onChange={this.handleInputChange} required/>
                                    </div>
                                </div>

                                <div className={styler(["margin"])}>
                                    <label><input className={styler(["checkbox"])} type="checkbox" name="remember"/> eingeloggt bleiben</label>
                                </div>

                            </div>
                            <div className={styler(["card-footer"])}>
                                <button className={styler(["button", "button-primary", "width-1-1"])} type="submit" onClick={this.login}>
                                    <span>LOGIN</span>
                                </button>

                                <div className={styler(["text-small", "text-center", "margin-small-top"])}>
                                    <a href="#">
                                        Passwort vergessen?
                                    </a>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authentication: state.authentication,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        authenticate: authenticationAction
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);