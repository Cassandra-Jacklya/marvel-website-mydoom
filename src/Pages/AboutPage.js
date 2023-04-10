import React from 'react';
import avengers from '../Images/Avengers-emblem-removebg-preview.png';
import cass from '../Images/cass.png';
import deilan from '../Images/deilan.png';
import akmal from '../Images/akmal.png';
import pavi from '../Images/pavi.png';
import cassNormal from '../Images/cass-normal.JPG';

const AboutPage = () => {
    return (
        <div className='About'>
            <img id="avengers-about" src={avengers} alt='avengers logo title'/>
            <div className='about-info'>
                <h2>Company Info</h2>
                <p>Marvel Entertainment, LLC, a wholly-owned subsidiary of The Walt Disney Company, is one of the world's most prominent 
                    character-based entertainment companies, built on a proven library of more than 8,000 characters featured in a variety of 
                    media over seventy-five years. Marvel utilizes its character franchises in entertainment, 
                    licensing and publishing. For more information visit marvel.com. © 2023 MARVEL</p>
            </div>
            <div className='cards-info'>
                <div class="card">
                    <div class="wrapper">
                    <img src={cass} class="cover-image" />
                    <h4>"Code. Test. Debug-Bug-Bug-Bug. Stress. Eat. Exercise. Repeat."</h4>
                    </div>
                    <img src={cass} class="character" />
                </div>
                <div class="card">
                    <div class="wrapper">
                    <img src={deilan} class="cover-image" />
                    <h4>"CSS is my kryptonite"</h4>
                    </div>
                    <img src={deilan} class="character" />
                </div>
                <div class="card">
                    <div class="wrapper">
                    <img src={pavi} class="cover-image" />
                    <h4>"Sometimes, I wish to be the Thor of programming world"</h4>
                    </div>
                    <img src={pavi} class="character" />
                </div>
                <div class="card">
                    <div class="wrapper">
                    <img src={akmal} class="cover-image" />
                    <h4>"Even Ironman needed ChatGpt to save the world"</h4>
                    </div>
                    <img src={akmal} class="character" />
                </div>
            </div>
        </div>
    );
}

export default AboutPage;