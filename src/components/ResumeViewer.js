import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ResumeViewer.css';
import { useAuth } from './AuthContext';
const Api_URL = "https://d8twdt-5000.csb.app";

const ResumeViewer = () => {
    const { isAuthenticated, userRole, logout } = useAuth();
    const { filename, username } = useParams();
    // console.log('Filename:', filename);
    // console.log('Username:', username);
    // Decode the parameters if necessary
    const decodedFilename = decodeURIComponent(filename);
    const decodedUsername = decodeURIComponent(username);

    // console.log('Viewing file:', `${Api_URL}/${filename}`); // Debugging the file path
    // console.log('name:', `${decodedUsername}`);
    return (
        <div className="resumeViewerCon">
            <nav className="navbar">
                <div className="appName">
                    <span className="animatedRR">R</span>
                    <span className="mirrorI animatedRR">R</span>
                </div>
                <div className="navLinks">
                    <Link to="/" className="navLink">Home</Link>
                    {/* <Link to="/myResumes" className="navLink">My Resumes</Link> */}
                </div>
            </nav>
            <h1 className='username'>{decodedUsername}</h1>
            <div className="resumeViewerContent">
                <embed src={`${Api_URL}/${decodedFilename}`} type="application/pdf" width="100%" height="800px" />
            </div>
        </div>
    );
};

export default ResumeViewer;
