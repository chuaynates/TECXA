import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';


class Sidebar extends Component {

    searchRef = React.createRef();

    state={
        search:"",
        redirect:false
    }

    redirectToSearch = (e) => {
        e.preventDefault();
        this.setState({
            search: this.searchRef.current.value,
            redirect: true
        });
    }
    render() {

            if(this.state.redirect){
                return(
                        <Redirect to={'/redirect/' + this.state.search}/>
                );
            }

        return (
            <aside id="sidebar">
                <div id="nav-blog" className="sidebar-item">
                    <h3>Agregar</h3>
                    <Link to="/blog/formulario" className="btn btn-success">Agregar Noticia</Link>
                </div>

                <div id="nav-blog" className="sidebar-item">
                    <h3>TECSUP</h3>
                    <a href="https://www.tecsup.edu.pe/" className="btn ">Ir al sitio oficial</a>
                </div>
            </aside>
        );
    }


}
export default Sidebar;