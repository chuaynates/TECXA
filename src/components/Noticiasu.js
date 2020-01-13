import React,{Component} from 'react';
import not from '../assets/images/cartec2.png';
import Sidebarn from './Sidebarn';
import Loader from 'react-loader-spinner';
import {Link} from 'react-router-dom';
// import Moment from 'react-moment';
// import 'moment/local/es';

class Noticiasu extends Component{
    constructor(props) {
        super(props);
        this.state = ({
            noticias: [],
            status: null
        })
    }
    componentWillMount() {
        fetch('https://cors-anywhere.herokuapp.com/https://tecsa.herokuapp.com/api/noticias')
          .then((response) => {
            return response.json()
          })
          .then((prod) => {
            this.setState({ noticias:prod,
                status:'succes' })
            console.log(this.state)
          })    
      } 
    render(){
        if(this.state.noticias.length>=1){
        return(
            
            <div className="center">
            <section id="content">

            <h1 className="subheader">NOTICIAS</h1>

            <div id="articles">
                    {this.state.noticias.map(noticia => {
                return(
                 <article className="article-item" id="article-template">
                     <div className="image-wrap" key={noticia.notice_id}>
                         <img src={not} />
                     </div>
 
                     <h2>{noticia.notice_titulo}</h2>
                     <span className="date">
                         
                     </span>
                     <Link to={"/carreras/extnotu/"+noticia.notice_id}>Leer más</Link>

                     <div className="clearfix"></div>
                 </article>
                 
                );})}
               
                      
             </div>
             
     </section>
     <Sidebarn/>  
     </div>
     );}else if(this.state.noticias.length == 0 && this.state.status == 'succes'){
            return(
                <div>
                    <h1>No hay carreras para mostrar</h1>
                    
                </div>
            );
        } else {
          return(
              <div>
                  {/* type="Circles" */}
                  {/* <h1 className="cargando"><span className="S1">Car</span><span className="S2">gan</span><span className="S3">do....</span></h1> */}
                  <Loader className="cargando" type="Circles" color="#somecolor" height={80} width={80}/>
                  
          
              </div>
          );
        }
    }
}
export default Noticiasu;