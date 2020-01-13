import React, { Component } from 'react';
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';
import {Redirect,Link} from 'react-router-dom';
import  Login from './Login'

class Autenticacion extends Component {
    
    apeRef = React.createRef();
    nombreRef = React.createRef();
    telRef = React.createRef();
    corRef=  React.createRef();
    pasRef=React.createRef();
    
    // state ={
    //     noticia : {},
    //     status : null  
    // };
    constructor(props) {
        super(props);
        this.state = ({
            usuario: [],
            status: null
        })
    }
    
    componentWillMount(){
        this.validator = new SimpleReactValidator({
            messages:{
                required: "Este campo es obligatorio ",
                alpha_num_space: "El titulo solo puede contener letras, números o espacios"

            }

        });
    }

    changeState = () => {
        this.setState({
            usuario:{
            
            usu_apellidos:this.apeRef.current.value,
            usu_nombres:this.nombreRef.current.value,
            usu_telefono:this.telRef.current.value,
            usu_correo:this.corRef.current.value,
            usu_password:this.pasRef.current.value,
            

            },
           
        });
        console.log(this.state)
        this.validator.showMessages();
                this.forceUpdate();
    }

    saveUsuario = (e) =>{
        e.preventDefault();

        //Se rellena el state con el formularo 
        this.changeState();

        if(this.validator.allValid()){
        //Hacer una peticion http por post para  guardar el articulo
        axios.post("https://cors-anywhere.herokuapp.com/https://tecsa.herokuapp.com/api/usuarios",this.state.usuario)           
            .then(res=>{
                    this.setState({
                        noticia:res.data.usuario,
                        status: 'succes'
                    });
                    swal(
                        'USUARIO REGISTRADO',
                        'Se ha creado el usuario correctamente',
                        'success'
                    )

            });}else{
                this.setState({
                    status:'failed'
                });

                this.validator.showMessages();
                this.forceUpdate();
            }
            
    }



    render() {
        if(this.state.status === 'succes'){
            return <Redirect to="/Logeo"/>;
        }
        return (
            <div className="center">
                <section id="content">

                    <h1 className="subheader">REGISTRO</h1>

                    <form className="mid-form" onSubmit={this.saveUsuario} >
                        {/* <div className="form-group">
                        <label for="apellidos">Apellidos</label>
                        <input type="text" name="apellidos" />
                    </div> */}
                        {/* <div className="form-group">
                        <label for="carrera">Carrera</label>
                        <input type="text" name="carrera" />
                    </div> */}

                        <div className="form-group">
                            <label htmlfor="title">Apellidos</label>
                            <input type="text" name="apellidos" ref={this.apeRef} onChange={this.changeState} />
                            {this.validator.message('apellidos',this.state.usuario.usu_apellidos,'required|alpha_num_space')}

                        </div>
                        <div className="form-group">
                            <label htmlfor="title">Nombres</label>
                            <input type="text" name="nombres" ref={this.nombreRef} onChange={this.changeState} />
                            {this.validator.message('nombres',this.state.usuario.usu_nombres,'required|alpha_space')}

                        </div>
                        <div className="form-group">
                            <label htmlfor="title">Telefono</label>
                            <input type="text" name="telefono" ref={this.telRef} onChange={this.changeState}/>
                            {this.validator.message('telefono',this.state.usuario.usu_telefono,'required|numeric')}

                        </div>
                        <div className="form-group">
                            <label htmlfor="title">Correo</label>
                            <input type="text" name="correo" ref={this.corRef} onChange={this.changeState} />
                            {this.validator.message('correo',this.state.usuario.usu_correo,'required|email')}

                        </div>
                        <div className="form-group">
                            <label htmlfor="contraseña">Contraseña</label>
                            <input type="password" className="pasi"  name="contraseña" ref={this.pasRef} onChange={this.changeState}/>
                            {this.validator.message('contraseña',this.state.usuario.usu_password,'required')}

                        </div>
                        {/* <div className="form-group">
                            <label htmlfor="title">Confirmar contraseña</label>
                            <input type="text" name="conf" />

                        </div> */}
                        <div className="clearfix"></div>

                        <input type="submit" value="Registrar" className="btn-regis" />

                    </form>

                </section>
                <aside id="sidebar">
                <div id="nav-blog" className="sidebar-item">
                    <h3>Acceder con Google</h3>
                    <Login className="btn btn-success"/>
                </div>

                <div id="search" className="sidebar-item">
                    <h3>¿Ya tienes una cuenta?</h3>
                    <Link to ="/Logeo" className="btn btn-success">Ingresar</Link>
                </div>
            </aside>
            </div>


        );

    }

}
export default Autenticacion;