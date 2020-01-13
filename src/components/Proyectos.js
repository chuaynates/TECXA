import React,{Component} from 'react';
import Sidebarn from './Sidebarn';
import {Link} from 'react-router-dom'

class Proyectos extends Component{
    render(){
        return(
            <div className="center">
                <section id="content">

                    <h1 className="subheader">PROYECTOS INTEGRADORES</h1>

                    <div className="blog-cardb altb">
                        <div className="meta">
                        </div>
                        <div className="description">
                            <h1>UNINDEX</h1>
                            <h2>Diseño de Software</h2>
                            <p>Actualmente existe incertidumbre sobre las mejores universidades del Perú, es por esto que.... </p>
                            <p className="read-more">
                            <Link to={"/proyectos/extepro"}>Leer más</Link>
                            </p>
                        </div>
                    </div>
                    <div className="blog-cardb altb">
                        <div className="meta">
                        </div>
                        <div className="description">
                            <h1>AMSE</h1>
                            <h2>Diseño de Software</h2>
                            <p>El desavastecimiento es un problema muy recurrente hoy en dia en nuestro país, y entre las causas principales se encuentra...</p>
                            <p className="read-more">
                                <a href="article.html">Leer más</a>
                            </p>
                        </div>
                    </div>
                    <div className="blog-cardb altb">
                        <div className="meta">
                        </div>
                        <div className="description">
                            <h1>COCHE ELECTRÍCO</h1>
                            <h2>Electrónica</h2>
                            <p>La contaminacion en el mundo es uno de los principlaes problemas que afronta a humanidad hoy en dia, es por este motivo que...</p>
                            <p className="read-more">
                                <a href="article.html">Leer más</a>
                            </p>
                        </div>
                    </div>

                </section>
                <Sidebarn />
            </div>

        );
    }
}
export default Proyectos;
