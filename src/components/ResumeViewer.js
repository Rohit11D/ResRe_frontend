import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ResumeViewer.css';

const Api_URL = "https://7fdkv4-5000.csb.app";

const ResumeViewer = () => {
    const { filename } = useParams();
    console.log('Viewing file:', `${Api_URL}/uploads/${filename}`); // Debugging the file path

    return (
        <div className="resumeViewerCon">
            <nav className="navbar">
                <div className="appName">
                    <span className="animatedRR">R</span>
                    <span className="mirrorI animatedRR">R</span>
                </div>
                <div className="navLinks">
                    <Link to="/" className="navLink">Home</Link>
                    <Link to="/myResumes" className="navLink">My Resumes</Link>
                </div>
            </nav>
            <div className="resumeViewerContent">
                <embed src={`${Api_URL}/${filename}`} type="application/pdf" width="100%" height="600px" />
            </div>
        </div>
    );
};

export default ResumeViewer;
