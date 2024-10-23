import React from 'react';
import './AboutUs.css';
import amithaheadshot from './photos/amithaheadshot.jpg';
import juliaheadshot from './photos/juliaheadshot.jpg';
import moriahheadshot from './photos/moriahheadshot.jpeg';
import shayheadshot from './photos/shayheadshot.jpeg';
import mayaheadshot from './photos/mayaheadshot.jpeg';
import Carousel from './Carousel';
import hoopspanhel from './photos/hoopspanhel.jpg';
import castlepanhel from './photos/castlepanhel.png';
import novadancepanhel from './photos/novadancepanhel.png';
import amitha from './photos/amitha.png';
import axo from './photos/axo.png';
import dg from './photos/dg.png';
import tridelt from './photos/tridelt.png';


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
      ];
    return (
        <div className = "AboutUs">
            <h1>Smarter Matches, Stronger Sisterhood</h1>
            <Carousel images={images} />
            <h2>Our Why</h2>
            <p>“Sororify” seeks to streamline the Villanova Panhellenic Recruitment process. At Villanova roughly 600 girls rush eight sororities in the first round of recruitment known as Sisterhood Round. The process of “matching” girls to each sorority’s existing members based on like qualities takes hours to ensure that potential members have a good experience. All of the tedious work done by hand still doesn’t guarantee the PNMs will be matched with their compatible counterparts in sororities.</p>
            <p>Our algorithm bridges the gap by ensuring the best possible match between PNMS and current chapter members the sorority that fits them the best.</p>
            <h2>About Our Team</h2>
            <p></p>
            <p>Front End Team: Shay McDowell and Amitha Soundararajan</p>
             <div className="team-images">
             <img src={shayheadshot} alt="Shay's headshot" className="circle-image" />
             <img src={amithaheadshot} alt="Amitha's headshot" className="circle-image" />
             </div>
            <p> Back End Team: Julia Foy, Moriah Owens, Maya McFadden </p>
            <div className="team-images">
             <img src={juliaheadshot} alt="Julia's headshot" className="circle-image" />
             <img src={moriahheadshot} alt="Moriah's headshot" className="circle-image" />
             <img src={mayaheadshot} alt="Mayas's headshot" className="circle-image" />
            </div>
        </div>
    );
};

export default AboutUs;