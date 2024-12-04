import React from 'react';
import './AboutUs.css';
import Carousel from './Carousel';
import hoopspanhel from './photos/hoopspanhel.jpg';
import castlepanhel from './photos/castlepanhel.png';
import novadancepanhel from './photos/novadancepanhel.png';
import amitha from './photos/amitha.png';
import axo from './photos/axo.png';
import dg from './photos/dg.png';
import tridelt from './photos/tridelt.png';
import girl from './photos/girl.png';
import kd from './photos/kd.png';
import red from './photos/red.png';
import kappamain from './photos/kappamain.png';
import kappamain2 from './photos/kappamain2.png';
import aphichurch from './photos/aphichurch.png';
import dgcampus from './photos/DGcampus.png';


const AboutUs = () => {
    const images = [
        castlepanhel,
        'https://villanovan.com/wp-content/uploads/2022/04/graydon-paul.jpeg',
        hoopspanhel,
        novadancepanhel,
        amitha,
        axo,
        dg,
        tridelt,
        girl,
        red,
        kd,
      ];
    return (
        <div className="container">
            <img src={kappamain2} alt="Kappa Main" className="about-us-image" />
           
           <div className="text-and-images">
                <p>“Sororify” seeks to streamline the Villanova Panhellenic Recruitment process. At Villanova roughly 600 girls rush eight sororities in the first round of recruitment known as Sisterhood Round. The process of “matching” girls to each sorority’s existing members based on like qualities takes hours to ensure that potential members have a good experience. All of the tedious work done by hand still doesn’t guarantee the PNMs will be matched with their compatible counterparts in sororities. Our algorithm bridges the gap by ensuring the best possible match between PNMS and current chapter members the sorority that fits them the best.</p>
                <div className="image-container">
                    <img src={aphichurch} alt="Aphi Church" />
                    <img src={dgcampus} alt="DG Campus" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;