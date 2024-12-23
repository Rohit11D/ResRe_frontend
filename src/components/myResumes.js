import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './myResumes.css'
const Api_URL = "https://d8twdt-5000.csb.app";

const MyResumes = () => {
    const [resumes, setResumes] = useState([]);

    useEffect(() => {
        const fetchResumes = async () => {
            try {
                const token = localStorage.getItem('auth-token');
                const response = await fetch(Api_URL + '/myresumes', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                const responseData = await response.json();
                if (response.ok) {
                    setResumes(responseData);
                } else {
                    alert(responseData.message || 'Error fetching resumes');
                }
            } catch (error) {
                console.error(error);
                alert('Error fetching resumes');
            }
        };

        fetchResumes();
    }, []);

    return (
        <div className="myResumesCon">
            <nav className="navbar">
                <div className="appName">
                    <span className="animatedRR">R</span>
                    <span className="mirrorI animatedRR">R</span>
                    <span className='simpleName'>ResumeRevamper</span>
                </div>
                <div className="navLinks">
                    {<Link to="/" className="navLink">Home</Link>}
                </div>
            </nav>
            <h1>My Resumes</h1>
            {resumes.length > 0 ? (
                <div className="resumesGrid">
                    {resumes.map((resume) => (
                        <div className="resumeCard" key={resume._id}>
                            {/* <a href={`https://7fdkv4-5000.csb.app/${resume.resumeFile}`} target="_blank" rel="noopener noreferrer"> */}
                            <Link to={`/resume/${encodeURIComponent(resume.resumeFile)}`} target="_blank">

                                <div className="resumePreview">
                                    <embed src={`${Api_URL}/${resume.resumeFile}`} type="application/pdf" width="100%" height="200px" />
                                </div>

                                <div className="resumeReviews">
                                    <h3>Reviews</h3>
                                    {resume.reviews.length > 0 ? (
                                        <ul>
                                            {resume.reviews.map((review, index) => (
                                                <li key={index}>{review.review}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No reviews yet.</p>
                                    )}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No resumes uploaded yet.</p>
            )}
        </div>
    );
};

export default MyResumes;
