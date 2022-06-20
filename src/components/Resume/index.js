import React from 'react';

function Resume() {
    return (
      <section id='resume'>
        <p>
            Front-End Proficiencies:
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Handlebars</li>
                <li>Bootstrap</li>
                <li>jQuery</li>
                <li>AJAX</li>
            </ul>

            Back-End Proficiencies:
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>GraphQL</li>
            </ul>

            <a href='https://docs.google.com/document/d/1YV2tY_aoCaD5SaVKfj3n92SHHAVopVdtTMKQ1RyjXww/edit?usp=sharing' rel='noreferrer' target='_blank' id='viewresume'>View My Resume Here</a>
        </p>
      </section>
    )
}

export default Resume;