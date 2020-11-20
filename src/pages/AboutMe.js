import React from "react";

import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import instagram from '../img/instagram.png';

export default function AboutMe() {
    const socialNetworks = [
        {
            name: 'github',
            link: 'https://github.com/YanaTrifonova',
            img: github,
        },
        {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/yana-trifonova-0920b3179/',
            img: linkedin,
        },
        {
            name: 'instagram',
            link: 'https://www.instagram.com/yana_trifonova/',
            img: instagram,
        }
    ];

    return (
        <div>
            <h1>About Me</h1>
            <h2>Feel free to contact me</h2>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                {socialNetworks.map((socialCard, index) => {
                    return (
                        <a style={{margin: '20px'}} href={socialCard.link} target="_blank" rel="noreferrer" key={index}>
                            <img src={socialCard.img} alt={socialCard.name}/>
                            <h4>{socialCard.name}</h4>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}