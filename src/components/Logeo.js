import React, { Component } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';
import { Redirect, Link } from 'react-router-dom';
import Login from './Login';
import { exportDefaultSpecifier } from '@babel/types';

class Logeo extends Component {

    corRef = React.createRef();
    pasRef = React.createRef();

    // constructor(prop) {
    //     super(props);
    //     this.handler = ({
    //         captura:[]
    //     })
    //   }
    // recojo=[
    //    usu_correo : this.apeRef.currentValue,
    //    usu_contra : this.pasRef.currentValue
    // ]

    // changeHandler = () => {
    //     this.setHandler({
    //         captura:{
    //             usu_correo:this.corRef.current.value,
    //             usu_contraseña:this.pasRef.current.value,
    //         },

    //     });
    //     console.log(this.handler)
    // }

    constructor(props) {
        super(props);
        this.state = ({
            usuarios: [],
            captura: [],
            status: null,
            estado:null
        })
    }

    componentWillMount() {

    }

    verificarUs = (e) => {
        e.preventDefault();

        fetch('https://cors-anywhere.herokuapp.com/https://tecsa.herokuapp.com/api/usuarios')
            .then((response) => {
                return response.json()
            })
            .then((prod) => {
                this.setState({
                    usuarios: prod,
                    status: 'succes'
                })
                console.log(this.state)
            })

    }
    changeState = () => {
        this.setState({
            captura: {
                correo: this.corRef.current.value,
                contraseña: this.pasRef.current.value
            },
        });

    }


    render() {
        for (let j = 0; j < this.state.usuarios.length; j++) {
            console.log(this.state.usuarios[j].usu_correo)
            if (this.state.captura.correo === 'admi@administrador.com' && this.state.usuarios[j].usu_password === 'admi2019') {
                this.setState({
                    // this.state.captura.correo == 'admi@administrador.com' && this.state.usuarios[j].usu_password === 'admi2019' 
                    estado:'logueado'
                });
                return <Redirect to='/Noticias' 
                    />;
            }else if(this.state.usuarios[j].usu_correo === this.state.captura.correo && this.state.usuarios[j].usu_password === this.state.captura.contraseña){
                    return  <Redirect to='/Home' 
                    />;
            }else {
                
                swal({
                    title: "Correcto",
                    text: "Acabas de ingresar",
                    icon: "info",
                    button: true,
                  })
                  .then((willDelete) => {
                    if (willDelete) {
                        window.location.reload()
                    }
                  });
               
            }
        }


        // if(this.state.usuarios.usu_correo === ){
        //     return <Redirect to="/Home"/>;
        // }
        return (
            <div className="center">
                <section id="content">

                    <h1 className="subheader">Ingresar</h1>

                    <form className="mid-form" onSubmit={this.verificarUs} >
                        <div className="form-group">
                            <label htmlFor="correo">Correo</label>
                            <input type="text" name="correo" ref={this.corRef} onChange={this.changeState} />

                        </div>

                        {/* <div className="form-group">
                            <label for="apellidos">Apellidos</label>
                            <input type="text" name="apellidos" />
                        </div> */}
                        {/* <div className="form-group">
                            <label for="carrera">Carrera</label>
                            <input type="text" name="carrera" />
                        </div> */}

                        <div className="form-group">
                            <label htmlFor="contraseña">Contraseña</label>
                            <input type="password" name="contraseña" className="pasi"ref={this.pasRef} onChange={this.changeState} />

                        </div>



                        <div className="clearfix"></div>
                        <div className="botones">
                            <input type="submit" value="Entrar" className="btn-log" />

                        </div>


                    </form>

                </section>
                <aside id="sidebar">
                    <div id="nav-blog" className="sidebar-item">
                        <h3>Acceder con Google</h3>
                        <Login className="btn btn-success" />
                    </div>

                    <div id="search" className="sidebar-item">
                        <h3>¿Aún no tienes cuenta?</h3>
                        <Link to="/Autenticacion" className="btn btn-success">Registrarse</Link>
                    </div>
                </aside>
            </div>

        );
    }
}
export default Logeo;