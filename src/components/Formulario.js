import React, { Component } from 'react';
import google from '../assets/images/google.png';
import tec12 from '../assets/images/tec12.jpg';


class Formulario extends Component {

    render() {
        return (
            < div className="limiter">
                <div className="container-login100" style={{ backgroundImage: "url(" + tec12 + ")"}}>
                    <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
                        <form className="login100-form validate-form flex-sb flex-w">
                            <span className="login100-form-title p-b-53">
                                Ingresar con
					</span>

                            <div className="wrap-input1">
                                <a href="#" className="btn-google m-b-20">
                                    <img src={google} alt="GOOGLE" />
                                    Google
					</a>
                            </div>
                            <div className="p-t-31 p-b-9">
                                <span className="txt1">
                                    Correo
						</span>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Correo obligatorio">
                                <input className="input100" type="text" name="username" />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="p-t-13 p-b-9">
                                <span className="txt1">
                                    Contraseña
						</span>


                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Contraseña obligatoria">
                                <input className="input100" type="password" name="pass" />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="container-login100-form-btn m-t-17">
                                <button className="login100-form-btn">
                                    Ingresar
						</button>
                            </div>

                            <div className="w-full text-center p-t-55">
                                <span className="txt2">
                                    ¿No tienes una cuenta?
						</span>

                                <a href="#" className="txt2 bo1">
                                    Registrarse
						</a>
                            </div>
                        </form>
                    </div>
                </div>
            </ div>
        );
    }

}
export default Formulario;