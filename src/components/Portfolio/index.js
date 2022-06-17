import React from 'react';

import CodeQuiz from '../../assets/images/codequiz.jpg';
import LetsTalkRecipes from '../../assets/images/letstalkrecipes.jpg';
import NoteTaker from '../../assets/images/notetaker.jpg';
import TechBlog from '../../assets/images/techblog.jpg';
import BudgetTracker from '../../assets/images/budgettracker.jpg';
import OhSnap from '../../assets/images/ohsnap.jpg';

function Portfolio() {
    return (
        <section>
            <div className='project'>
                <h3>Code Quiz</h3>
                <img src={CodeQuiz} alt='mockup of code quiz app' />
                <p>A timed quiz that tests your JavaScript knowledge. Built with: HTML, CSS, Bootstrap, and JavaScript.</p>
                <a href='https://kaiafay.github.io/code-quiz/' target='_blank' rel='noreferrer'>View App</a>
                <a href='https://github.com/kaiafay/code-quiz' target='_blank' rel='noreferrer'>View Repository</a>
            </div>
            <div className='project'>
                <h3>Let's Talk Recipes</h3>
                <img src={LetsTalkRecipes} alt='mockup of lets talk recipes app' />
                <p>An application that allows users to search for recipes and recites them via text-to-speech. Built with: HTML, Bulma, JavaScript, jQuery, ResponsiveVoice API, and TheMealDB API.</p>
                <a href='https://kaiafay.github.io/group-project/' target='_blank' rel='noreferrer'>View App</a>
                <a href='https://github.com/kaiafay/group-project' target='_blank' rel='noreferrer'>View Repository</a>
            </div>
            <div className='project'>
                <h3>Note Taker</h3>
                <img src={NoteTaker} alt='mockup of note taker app' />
                <p>An application that allows users to write, save, and delete notes. Built with: HTML, CSS, JavaScript, Node.js, and Express.js.</p>
                <a href='https://note-taker9.herokuapp.com/' target='_blank' rel='noreferrer'>View App</a>
                <a href='https://github.com/kaiafay/note-taker' target='_blank' rel='noreferrer'>View Repository</a>
            </div>
            <div className='project'>
                <h3>Tech Blog</h3>
                <img src={TechBlog} alt='mockup of tech blog app' />
                <p>A CMS-style blog site that allows users to publish their own blogs as well as leave comments on other users' blogs. Built with: Handlebars, Node.js, Express.js, MySQL, Sequelize, and express-session.</p>
                <a href='https://tech-blog9.herokuapp.com/' target='_blank' rel='noreferrer'>View App</a>
                <a href='https://github.com/kaiafay/tech-blog' target='_blank' rel='noreferrer'>View Repository</a>
            </div>
            <div className='project'>
                <h3>Budget Tracker</h3>
                <img src={BudgetTracker} alt='mockup of budget tracker app' />
                <p>A progressive web application with offline access and functionality that allows users to track expenses and deposits. Built with: HTML, Bootstrap, Mongoose, MongoDB, and IndexedDB.</p>
                <a href='https://budget-tracker935.herokuapp.com/' target='_blank' rel='noreferrer'>View App</a>
                <a href='https://github.com/kaiafay/budget-tracker' target='_blank' rel='noreferrer'>View Repository</a>
            </div>
            <div className='project'>
                <h3>Oh Snap</h3>
                <img src={OhSnap} alt='mockup of oh snap app' />
                <p>A professional portfolio website for a photographer to showcase their skills. Built with: React.</p>
                <a href='https://kaiafay.github.io/photo-port/' target='_blank' rel='noreferrer'>View App</a>
                <a href='https://github.com/kaiafay/photo-port' target='_blank' rel='noreferrer'>View Repository</a>
            </div>
        </section>
    )
}

export default Portfolio;