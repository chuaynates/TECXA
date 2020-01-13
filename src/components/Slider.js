import React, { Component } from 'react';
import tec from '../assets/images/Tecsup-imagen.jpg';
import {Link} from 'react-router-dom';

class Slider extends Component{

    render() {
        return (
            <div id="slider" className="slider-big" style={{ backgroundImage: "url(" + tec + ")"}}>
                <h1 className="lema"><strong>Únete a nuestra comunidad</strong></h1>
                <Link to="/carreras" className="btn-white">Carreras</Link>
            </div>
        );
    }
}
export default Slider;


