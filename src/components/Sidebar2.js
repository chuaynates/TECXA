import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';


class Sidebar2 extends Component {

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
               

                <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Ingresar palabra</p>
                    
                    <form onSubmit={this.redirectToSearch}>
                        <input type="text" name="search" ref={this.searchRef} />
                        <input type="submit" name="submit" value="Buscar" className="btn" />
                    </form>
                </div>
            </aside>
        );
    }


}
export default Sidebar2;