import React, { Component } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';
import { Redirect } from 'react-router-dom';

class Editnot extends Component {

    noticeId = null;

    titleRef = React.createRef();
    contentRef = React.createRef();

    // state ={
    //     noticia : {},
    //     status : null  
    // };
    constructor(props) {
        super(props);
        this.state = ({
            noticia: {},
            status: null
        })
    }
      
    componentWillMount() {
        this.noticeId = this.props.match.params.id;
        this.getNoticia(this.noticeId);
        this.validator = new SimpleReactValidator({
            messages: {
                required: "Este campo es obligatorio ",
                alpha_num_space: "El titulo solo puede contener letras, números o espacios"

            }

        });
    }

    getNoticia = (id) => {
        axios.get('https://cors-anywhere.herokuapp.com/https://tecsa.herokuapp.com/api/noticias/' +id)
             .then(res => {
                this.setState({
                    noticia:res.data
                   
                })
            });
    }

    changeState = () => {
        this.setState({
            noticia: {
                notice_titulo: this.titleRef.current.value,
                notice_contenido: this.contentRef.current.value
            },

        });
        console.log(this.state)
        this.validator.showMessages();
        this.forceUpdate();
    }

    saveNoticia = (e) => {
        e.preventDefault();

        //Se rellena el state con el formularo 
        this.changeState();

        if (this.validator.allValid()) {
            //Hacer una peticion http por post para  guardar el articulo
            axios.post("https://cors-anywhere.herokuapp.com/https://tecsa.herokuapp.com/api/noticias/"+this.noticeId, this.state.noticia)
                .then(res => {
                    this.setState({
                        noticia: res.data.noticia,
                        status: 'succes'
                    });
                    swal(
                        'NOTICIA ACTUALIZADA',
                        'Se ha modificó correctamente esta noticia',
                        'success'
                    )

                });
        } else {
            this.setState({
                status: 'failed'
            });

            this.validator.showMessages();
            this.forceUpdate();
        }
    }
    render() {
        console.log(this.state.noticia);
        if (this.state.status === 'succes') {
            return <Redirect to="/noticias" />;
        }
        return (
            <div className="center">
                <section id="content">

                    <h1 className="subheader">Editar Artículo</h1>
                    {this.state.noticia.notice_titulo &&
                      <form className="mid-form" onSubmit={this.saveNoticia}>
                      <div className="form-group">
                          <label htmlfor="title">Titulo</label>
                          <input type="text" name="title" defaultValue={this.state.noticia.notice_titulo} ref={this.titleRef} onChange={this.changeState} />
                          {this.validator.message('title', this.state.noticia.notice_titulo, 'required|')}
                      </div>

                      {/* <div className="form-group">
                          <label for="apellidos">Apellidos</label>
                          <input type="text" name="apellidos" />
                      </div> */}
                      {/* <div className="form-group">
                          <label for="carrera">Carrera</label>
                          <input type="text" name="carrera" />
                      </div> */}

                      <div className="form-group">
                          <label htmlfor="content">Contenido</label>
                          <textarea type="text" name="content" defaultValue={this.state.noticia.notice_contenido} ref={this.contentRef} onChange={this.changeState}   ></textarea>
                          {this.validator.message('content', this.state.noticia.notice_contenido, 'required')}
                      </div>



                      <div className="clearfix"></div>

                      <input type="submit" value="Actualizar" className="btn btn-success" />

                  </form>
                    }{!this.state.noticia.notice_titulo &&
                    <h1 className="subheadoer">Cargando</h1>


                    }

                    

                </section>
                <Sidebar />
            </div>

        );
    }
}
export default Editnot;