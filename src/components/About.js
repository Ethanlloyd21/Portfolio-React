import React from 'react';
import './Modal/Modal.css';



const About = (props) => {
    return (
        <section className="site-section" id="skills">
            <div className="container">
                <div className="site-section__icon">
                    <hr className="progress"></hr>
                </div>
                <h1 className="site-heading"> About  </h1>
                <div className="cols">

                    <b>My Passion..</b>
                    <p>I am a Software Web Developer from Seattle, WA who loves to learn and creatively solve problems. I specialize in creating beautiful website interfaces that gives the site both a stylish and clean design. I design and develop experiences that makes people's lives simple.</p>
                    <br></br><br></br>
                    <p><b>My Personality..</b></p>
                    <p>I am an easygoing and mild mannered guy who enjoys many hobbies. Of these hobbies, I enjoy traveling around the world, experiencing different cultures, visiting the beach, composing music and art, and playing video games the most. I am also a big fan of the San Diego Chargers (now Los Angeles).</p>


                </div>
            </div>
        </section>
    );
};

export default About;