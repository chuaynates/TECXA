import React, { Component } from 'react';
import tec from '../assets/images/tecloge.jpg';




class Extension  extends Component{
    constructor(props) {
        super(props);
        this.state = ({
            carreras: [],
            status: null
        })
    }
    componentWillMount(id) {
        var id = this.props.match.params.id;
        // fetch('https://cors-anywhere.herokuapp.com/https://tecsa.herokuapp.com/api/carreras/duration/'+busqueda)
        fetch('https://cors-anywhere.herokuapp.com/https://tecsa.herokuapp.com/api/carreras/'+id)
          .then((response) => {
            return response.json()
          })
          .then((prod) => {
            this.setState({ carreras:prod,
                status:'succes' })
            console.log(this.state)
          })    
      } 
    
    

    render(){
        return(
            <div className="center">
            <section id="content">

                    <article className="article-item article-detail">
                        <div className="image-wrap1">
                            <img src={tec} alt="Diseño" />
                        </div>
    
                        <h1 className="subheader">{this.state.carreras.car_nombre}</h1>
                        <span className="date">
                        Descubre tu talento
                        </span>
                        <p className="parrafo">
                           {this.state.carreras.car_acerca}
                        </p>
                        

                        <div className="clearfix"></div>
                    </article>
                
            </section>
            <aside id="sidebar">
                <div id="nav-blog" className="sidebar-item">
                    <h3>Plan curricular</h3>
                    <a href={this.state.carreras.car_link_malla} target="_blank" className="btn btn-success">Ver malla</a>
                </div>

                <div id="search" className="sidebar-item">
                    <h3>TECSUP</h3>
                    <p>Ver más sobre esta carrera</p>
                    <a href={this.state.carreras.car_link_directo} target="_blank" className="btn">Ir</a>
                </div>
            </aside>
            </div>

        );
    }
}
export default Extension;