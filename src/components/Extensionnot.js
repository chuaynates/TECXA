import React, { Component } from 'react';
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom';
import swal from 'sweetalert';



class Extensionnot  extends Component{
    constructor(props) {
        super(props);
        this.state = ({
            noticias: [],
            status: null
        })
    }
    componentWillMount(id) {
        var id = this.props.match.params.id;
        // fetch('https://cors-anywhere.herokuapp.com/https://tecsa.herokuapp.com/api/carreras/duration/'+busqueda)
        fetch('https://cors-anywhere.herokuapp.com/https://tecsa.herokuapp.com/api/noticias/'+id)
          .then((response) => {
            return response.json()
          })
          .then((prod) => {
            this.setState({ noticias:prod,
                status:'succes' })
            console.log(this.state)
          })    
      } 
    
    deleteNotice = (id) =>{
        swal({
            title: "¿Desea eliminar esta noticia?",
            text: "Una vez borrada no podra recuperar la noticia",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                axios.get('https://cors-anywhere.herokuapp.com/https://tecsa.herokuapp.com/api/noticias/delete/'+id)
                .then( res => {
                    this.setState({
                        noticia: res.data.noticia,
                        status:'deleted'
                    });
                    swal(
                        'Noticia Eliminada',
                        'Ha eliminado la noticia correctamente',
                        'info'
                  );
                });
            } else {
              swal("Cancelado");
            }
          });

       
    }

    render(){
        if(this.state.status === 'deleted'){
            return<Redirect to="/noticias"/>
        }
        return(
            <div className="center">
            <section id="content">

                    <article className="article-item article-detail">
                        <div className="image-wrap">
                            <img src="https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg" alt="Diseño" />
                        </div>
    
                        <h1 className="subheader">{this.state.noticias.notice_titulo}</h1>
                        <span className="date">
                            Hace 5 minutos
                        </span>
                        <p className="parrafo">
                           {this.state.noticias.notice_contenido}
                        </p>
                        

                        <div className="clearfix"></div>
                    </article>
                
            </section>
            <aside id="sidebar">
                <div id="nav-blog" className="sidebar-item">
                    <h3>Editar</h3>
                    <Link to={"/noticias/editar/"+this.state.noticias.notice_id} className="btn btn-success">Editar</Link>
                </div>

                <div id="search" className="sidebar-item">
                    <h3>Eliminar</h3>
                    <button onClick={
                        ()=>{
                            this.deleteNotice(this.state.noticias.notice_id)
                        }
                    } className="btn">X</button>
                </div>
            </aside>
            </div>

        );
    }
}
export default Extensionnot;