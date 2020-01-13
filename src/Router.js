import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Blog from './components/Blog';
import Carreras from './components/Carreras';
import Noticias from './components/Noticias';
import Noticiasu from './components/Noticiasu';
import Crearp from './components/Crearp';
import Extension from './components/Extension';
import Proyectos from './components/Proyectos';
import Search from './components/Search';
import Search2 from './components/Search2';
import Extensionnot from './components/Extensionnot';
import Extnotu from './components/Extnotu';
import Editnot from './components/Editnot';
import Autenticacion from './components/Autenticacion';
import Logeo from './components/Logeo';
import ExtePro from './components/ExtePro';

class Router extends Component {

    render() {
        return (

            <BrowserRouter>

                <Header />
 
               
                    <Switch>
                        <Route exact path="/Home" component={Home} />
                        <Route exact path="/Autenticacion" component={Autenticacion}/>
                        <Route exact path="/Logeo" component={Logeo}/>
                        <Route exact path="/carreras" component={Carreras}/>
                        <Route exact path="/blog" component={Blog}/>
                        <Route exact path="/noticias" component={Noticias}/>
                        <Route exact path="/noticiasu" component={Noticiasu}/>
                        <Route exact path="/carreras/extnotu/:id" component={Extnotu}/>
                        <Route exact path="/blog/formulario" component={Crearp}/>
                        <Route exact path="/proyectos" component={Proyectos}/>
                        <Route exact path="/proyectos/extepro" component={ExtePro}/>
                        <Route exact path="/carreras/extension/:id" component={Extension}/>
                        <Route exact path="/carreras/extensionnot/:id" component={Extensionnot}/>
                        <Route exact path="/noticias/editar/:id" component={Editnot}/>
                        <Route exact path="/carreras/filtro/:num" component={Search2}/>
                        <Route exact path="/carreras/busqueda/:search" component={Search}/>
                         <Route exact path="/redirect/:search" render={
                            (props) => {
                                var busqueda = props.match.params.search;
                                return(
                                <Redirect to ={'/carreras/busqueda/'+busqueda}/>
                                );
                        }
                    }
                       /> 
                        <Route exact path="/redirect/:num" render={
                            (props) => {
                                var busqueda = props.match.params.search;
                                return(
                                <Redirect to ={'/carreras/filtro/'+busqueda}/>
                                );
                        }
                    }
                       /> 
                       

                    </Switch>
                   
                    <div className="clearfix"></div>
                
               
            </BrowserRouter>
        );
    }
}

export default Router;