import React, { Component } from 'react';



class ExtePro  extends Component{
   
    render(){
        return(
            <div className="center">
            <section id="content">

                    <article className="article-item article-detail">
                        <div className="image-wrap1">
                            <img src="http://1.bp.blogspot.com/-TuuLr3jV1vU/VlJc-rbpkiI/AAAAAAAABlY/eGHnRFnU5NA/s1600/021%2BTecsup.jpg" alt="Diseño" />
                        </div>
    
                        <h1 className="subheader">UNNIDEX</h1>
                        <span className="date">
                            
                        </span>
                        <p className="parrafo">
                        Actualmente existe incertidumbre sobre las mejores universidades del Perú, es por esto que este proyecto se centra en mostrar todas las universidades licenciadas por SUNEDU,y asu vez ofrece herramientas como un test vocacional o ranking de universidades que ayudan al usuario a tener una mejor perspectiva de que elegir.
                        </p>
                        <img src="https://elperuano.pe/fotografia/thumbnail/2019/11/16/000067489M.jpg" ></img>

                        <div className="clearfix"></div>
                    </article>
                
            </section>
            <aside id="sidebar">
                <div id="nav-blog" className="sidebar-item">
                    <h3>Repositorio del proyecto</h3>
                    <a href="https://github.com/MLoarte4561/codigo_fuente" target="_blank" className="btn btn-success">Ver proyecto</a>
                </div>

                <div id="search" className="sidebar-item">
                    <h3>TECSUP</h3>
                    <p>Ir a la página de Tecsup</p>
                    <a href="https://www.tecsup.edu.pe/"target="_blank" className="btn">Ir</a>
                </div>
            
            </aside>
            
            </div>

        );
    }
}
export default ExtePro;