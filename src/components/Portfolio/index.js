import React from 'react';

import CodeQuiz from '../../assets/images/codequiz.jpg';
import LetsTalkRecipes from '../../assets/images/letstalkrecipes.jpg';
import NoteTaker from '../../assets/images/notetaker.jpg';
import DIYExplorer from '../../assets/images/diyexplorer.jpg';
import BudgetTracker from '../../assets/images/budgettracker.jpg';
import OhSnap from '../../assets/images/ohsnap.jpg';

function Portfolio() {
    return (
        <section id='projects'>
            <div className='project'>
                <h3>Code Quiz</h3>
                <img id='codequiz' src={CodeQuiz} alt='mockup of code quiz app' />
                <p>A timed quiz that tests your JavaScript knowledge. <br /> Built with: HTML, CSS, Bootstrap, and JavaScript.</p>
                <a href='https://kaiafay.github.io/code-quiz/' target='_blank' rel='noreferrer' className='view'>View App</a>
                <a href='https://github.com/kaiafay/code-quiz' target='_blank' rel='noreferrer' className='view'>View Repository</a>
            </div>
            <div className='project'>
                <h3>Let's Talk Recipes</h3>
                <img id='letstalkrecipes' src={LetsTalkRecipes} alt='mockup of lets talk recipes app' />
                <p>An application that allows users to search for recipes and recites them via text-to-speech. <br /> Built with: HTML, Bulma, JavaScript, jQuery, ResponsiveVoice API, and TheMealDB API.</p>
                <a href='https://kaiafay.github.io/group-project/' target='_blank' rel='noreferrer' className='view'>View App</a>
                <a href='https://github.com/kaiafay/group-project' target='_blank' rel='noreferrer' className='view'>View Repository</a>
            </div>
            <div className='project'>
                <h3>Note Taker</h3>
                <img id='notetaker' src={NoteTaker} alt='mockup of note taker app' />
                <p>An application that allows users to write, save, and delete notes. <br /> Built with: HTML, CSS, JavaScript, Node.js, and Express.js.</p>
                <a href='https://note-taker9.herokuapp.com/' target='_blank' rel='noreferrer' className='view'>View App</a>
                <a href='https://github.com/kaiafay/note-taker' target='_blank' rel='noreferrer' className='view'>View Repository</a>
            </div>
            <div className='project'>
                <h3>DIY Explorer</h3>
                <img id='diyexplorer' src={DIYExplorer} alt='mockup of diy explorer app' />
                <p>A blog site that allows users to publish DIY projects, comment on other users' projects, and save other users' projects. <br /> Built with: React, CSS, JavaScript, Express.js, Node.js, GraphQL, Mongoose, and MongoDB.</p>
                <a href='https://rocky-bayou-01919.herokuapp.com/' target='_blank' rel='noreferrer' className='view'>View App</a>
                <a href='https://github.com/kaiafay/DIY-sharing' target='_blank' rel='noreferrer' className='view'>View Repository</a>
            </div>
            <div className='project'>
                <h3>Budget Tracker</h3>
                <img id='budgettracker' src={BudgetTracker} alt='mockup of budget tracker app' />
                <p>A progressive web application with offline access and functionality that allows users to track expenses and deposits. <br /> Built with: HTML, Bootstrap, Mongoose, MongoDB, and IndexedDB.</p>
                <a href='https://budget-tracker935.herokuapp.com/' target='_blank' rel='noreferrer' className='view'>View App</a>
                <a href='https://github.com/kaiafay/budget-tracker' target='_blank' rel='noreferrer' className='view'>View Repository</a>
            </div>
            <div className='project'>
                <h3>Oh Snap</h3>
                <img id='ohsnap' src={OhSnap} alt='mockup of oh snap app' />
                <p>A professional portfolio website for a photographer to showcase their skills. Built with: React.</p>
                <a href='https://kaiafay.github.io/photo-port/' target='_blank' rel='noreferrer' className='view'>View App</a>
                <a href='https://github.com/kaiafay/photo-port' target='_blank' rel='noreferrer' className='view'>View Repository</a>
            </div>
        </section>
    )
}

export default Portfolio;