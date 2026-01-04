import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
    <article className="settingsContainer" >
        
        <div className="stylingAbout">
            <h1 className="landingHeader2">About</h1>
            <p className="MJEdescription2">
                As presented at the homepage, the MahJong Europa (MJE) was developed by Lukasz Galik as part
                of Honours Project at Edinburgh Napier University. MJE is a language learning app available as a website.
            </p>
            <p className="MJEdescription2">
                MJE was developed in JavaScript together with React.js library/framework.
                It is a front end only at the moment. It uses Vite to set up web app environment.
                It uses JSX to incorporate an HTML code into the JavaScript - which is a common 
                practice in React.js. 
            </p>
            <p className="MJEdescription2">
              MJE is being stored and backed up using GitHub repository. GitHub is connected
              with Netlify and MJE is hosted at the following URL address: https://mahjongeuropa2.netlify.app/
              Netlify is a fee hosting provider for front-end websites.
            </p>
        </div>
        <div className="stylingQuickAccess">
          <h1 className="landingHeader">Quick Access</h1>
          <div className="quickBtn">
            <Link to='/playfruits'>
                <button className="startBtn">
                    The Fruits
                </button>
            </Link>
            <Link to='/playmoods'>
                <button className="startBtn">
                    The Moods
                </button>
            </Link>
            <Link to='/playvegetables'>
                <button className="startBtn">
                    The Vegetables
                </button>
            </Link>
            <Link to='/playtransport'>
                <button className="startBtn">
                    The Transport
                </button>
            </Link>
            <Link to='/playnumbers'>
                <button className="startBtn">
                    The Numbers
                </button>
            </Link>
            <Link to='/playhomeware'>
                <button className="startBtn">
                    The Homeware
                </button>
            </Link>
            <Link to='/playactions'>
                <button className="startBtn">
                    The Actions
                </button>
            </Link>
          </div>
        </div>
    </article>
    </>
  )
}

export default About