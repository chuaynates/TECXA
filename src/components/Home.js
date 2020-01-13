import React, { Component } from 'react';
import Slider from './Slider';
import Sidebarn from './Sidebarn';
import Footer from './Footer';
import Map from './Map';
import credentials from './credentials';

const mapURL =  `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

class Home extends Component {

    render() {
        
        return (
            
            <div id="home">
            <Slider />
            <div className="center">
            <section id="content">
            <div>
                <h1 className="subheader">UBICACIÓN - Campus Lima</h1>
            </div>
            <Map 
                googleMapURL={mapURL}
                containerElement={<div style={{height:'400px'}} />}
                mapElement={<div style={{height:'100%'}}/>}
                loadingElement={<p>Cargando</p>}
                />
            </section>
            <Sidebarn />
            
            </div>
            
            {/* <integer field -dont save this mount for> */}
            <div className="clearfix"></div>
            <Footer />
            </div>
            
      );

    }

}
export default Home;