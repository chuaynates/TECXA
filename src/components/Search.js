import React, { Component } from 'react';
import Sidebar2 from './Sidebar2';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner'


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            carreras: [],
            status: null
        })
    }
    componentWillMount(busqueda) {
        var busqueda = this.props.match.params.search;
        // fetch('https://cors-anywhere.herokuapp.com/https://tecsa.herokuapp.com/api/carreras/duration/'+busqueda)
        fetch('https://cors-anywhere.herokuapp.com/https://tecsa.herokuapp.com/api/carreras/nameapi/'+busqueda)
          .then((response) => {
            return response.json()
          })
          .then((prod) => {
            this.setState({ carreras:prod,
                status:'succes' })
            console.log(this.state)
          })    
      } 

    render() {
        var busqueda = this.props.match.params.search;
        if(this.state.carreras.length>=1){
            return (
                
                <div className="center">
                <section id="content">
                <h1 className="subheader">{'Búsqueda : ' + busqueda}</h1> 
                 
                    <div className="s">
                        
                         {this.state.carreras.map(carrera => {
                return (    
                    <div className="carreras" key={carrera.car_id}>
                    <div className="blog-card alt" >
                    <div className="meta">
                        <div className="photo" style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQemQ5ZJt1A2xCRzhM1AqeU8-25dLwDXEsJbpXUpOV1d0EAcNxH&s)" }}></div>
    
                    </div>
                    <div className="description">
                        <h1>{carrera.car_nombre}</h1>
                        <h2>{carrera.car_duracion} años</h2>
                        <p>Carreras con enfoque práctico y docentes que emplean métodos activos y tecnologías de información para un aprendizaje moderno y eficaz.</p>
                        <p className="read-more">
                        <Link to={"/carreras/extension/"+carrera.car_id}>Leer más</Link>
                        </p>
                    </div>  
                </div>
                </div>
                );
              })}
                    {/* <div className="blog-card alt">
                            <div className="meta">
                                <div className="photo" style={{ backgroundImage: `url(require("./assets/images/tec12.jpg"))` }}></div>
    
                            </div>
                            <div className="description">
                                <h1>Diseño de Software</h1>
                                <h2>3 años</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                                <p className="read-more">
                                    <Link to="/carreras/extension">Leer más</Link>
                                </p>
                            </div>
                        </div> */}
    
                    </div>
                    
                   </section>
                   <Sidebar2/>
                    </div>
    
            );}else if(this.state.carreras.length == 0 && this.state.status == 'succes'){
                return(
                    <div>
                        <section id="content">
                        <h1>No hay carreras para mostrar</h1>
                        </section>
                        <Sidebar2 />
                    </div>
                );
            } else {
              return(
                  <div>
                      
                      <Loader className="cargando" type="Circles" color="#somecolor" height={80} width={80}/>
                  
              
                  </div>
              );
            }
    
        }
    
    }
export default Search;