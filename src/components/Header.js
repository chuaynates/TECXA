import React, { Component } from 'react';
import logo from '../assets/images/logotecsup.png';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Login from './Login';

class Header extends Component {

    
    constructor(props) {
        super(props);
        this.state = ({
            estado:''
        })
    };
    
    changeState = () => {
        this.setState({
            estado:'logueado'
        });
        console.log(this.state)
        this.validator.showMessages();
                this.forceUpdate();
    }

    render() {
        if(this.state.estado === 'logueado'){
        return (
            
            <header id="header">
                <div className="center">

                    <div id="logo">
                        <img src={logo} className="app-logo" alt="Logotipo" />
                        <span id="brand">
                        {/* <strong>TEC</strong>XA  */}
                    </span>
                    </div>


                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to="/Home" activeClassName="active">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/carreras" activeClassName="active">Carreras  </NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                            </li> */}
                            <li>
                                <NavLink to="/noticias" activeClassName="active">Noticias</NavLink>
                            </li>
                            <li>
                                <NavLink to="/proyectos" activeClassName="active">Proyectos</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/Logueo" activeClassName="active">Acceder</NavLink>
                            </li>
                            

                        </ul>
                    </nav>


                    
                </div>
            </header>
        );}else{
            return(
                <header id="header">
                <div className="center">

                    <div id="logo">
                        <img src={logo} className="app-logo" alt="Logotipo" />
                        <span id="brand">
                                
                    </span>
                    </div>


                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to="/Home" activeClassName="active">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/carreras" activeClassName="active">Carreras  </NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                            </li> */}
                            <li>
                                <NavLink to="/noticiasu" activeClassName="active">Noticias</NavLink>
                            </li>
                            <li>
                                <NavLink to="/proyectos" activeClassName="active">Proyectos</NavLink>
                            </li>
                            
                            <li>
                            <NavLink to="/Logeo" activeClassName="active">Acceder</NavLink>
                            </li>
                            

                        </ul>
                    </nav>


                    
                </div>
            </header>

            );
        }
    }


}
export default Header;