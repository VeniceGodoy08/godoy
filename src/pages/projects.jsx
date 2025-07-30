import './pages.css';
import React from "react";

const Projects = () => {
    return (
        <div className="projects-section">
            
            <h1 style={{ textAlign: 'center' }}>My Projects</h1>
            <ul>
                <li>
                    <strong>Personal Portfolio Website</strong><br />
                    A simple and clean website that showcases my skills, bio, and contact information. Built using React and CSS.
                </li>

                <li>
                    <img 
                        src="https://s3-alpha.figma.com/hub/file/3484860920/9adac246-5cfb-4a66-94b7-c12179edf5f1-cover.png" 
                        alt="Healthy Paws App"
                        className="project-img" 
                    />
                    <strong>Healthy Paws App</strong><br />
                    The Healthy Paws app is a convenient mobile tool that lets pet owners easily manage their pet insurance. With the app, you can quickly snap and submit vet invoices to file claims, track claim status in real time, and manage your policy details, billing information, and reimbursement preferences—all from your phone.
                    <br />
                    <img 
                        src="https://i.ytimg.com/vi/vDaT8U7-UnM/hqdefault.jpg" 
                        alt="Portfolio Thumbnail"
                        className="project-img"
                        />
                </li>

                <li>
                    <strong>Calculator App</strong><br />
                    A responsive calculator built with React that handles basic arithmetic operations.
                    <br />
                    <img 
                        src="https://tse4.mm.bing.net/th/id/OIP.KV21ji472SY-rg--3vnvzAHaEM?rs=1&pid=ImgDetMain&o=7&rm=3" 
                        alt="Calculator Screenshot"
                        className="project-img" 
                    />
                </li>
            </ul>
        </div>
    );
}

export default Projects;
