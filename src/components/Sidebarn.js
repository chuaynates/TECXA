import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';


class Sidebarn extends Component {
    render() {


        return (
            <aside id="sidebar">
                <div id="nav-blog" className="sidebar-item">
                    <h3>TECSUP</h3>
                    <a href="https://www.tecsup.edu.pe/" className="btn btn-success">Ir al sitio oficial</a>
                </div>

                <div id="search" className="sidebar-item">
                    <h3>NOTICIAS</h3>
                    <p>Ver las ultimas noticias en Tecsup</p>
                        <Link to="/noticias" className="btn " >IR</Link>
                    
                </div>
            </aside>
        );
    }


}
export default Sidebarn;