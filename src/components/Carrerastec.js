import React, { Component } from 'react';
import axios from 'axios';

class Carrerastec extends Component {
   


/* constructor() {
        super()
        this.state = {
            tecnicas: []
        }
    }
    componentDidMount() {
        axios.get('https://cors-anywhere.herokuapp.com/https://tecsa.herokuapp.com/api/carreras')
            .then(res => {
                let tecnica = res.data.carreras
                this.setState({
                    tecnicas: tecnica
                });
            })
            .catch(err => {
                console.log(err)
            });
    }*/

    render() {
        if(this.state.data.length >= 1   ){
            return(
                <div id="carreras">
                    <h1>Listado</h1>
                </div>    
            );
        }else if(this.state.data.length === 0 ){
            return(
                <div id="carreras">
                <h1>No hay carreras para mostrar</h1>
            </div>   
            );
        }else{
            return(
                <div id="carreras">
                <h1>Cargando</h1>
                <p>Espere un momento</p>
            </div>   
            );

        }
       
    }

}
export default Carrerastec;
