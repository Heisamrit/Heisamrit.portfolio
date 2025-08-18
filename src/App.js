import React, { useState, useEffect } from 'react';
import profilePhoto from './pf.jpeg';
// The main App component for the portfolio website.
const App = () => {
  // State to manage the dark mode toggle.
  const [isDarkMode, setIsDarkMode] = useState(false);
  // State to track the mouse position for the dog's eyes.
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // State for the dog's tail animation.
  const [isWagging, setIsWagging] = useState(false);

  // --- Function Definitions ---
  // Function to handle the Gmail link click.
  const handleGmailClick = (e, email) => {
    // Prevent the default link behavior of navigating to a new page.
    e.preventDefault();
    // Construct the Gmail compose URL with the recipient pre-filled.
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    // Open the URL in a new window/tab.
    window.open(gmailUrl, '_blank');
  };

  // Function to toggle between day and night mode.
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Function to trigger the tail wag animation.
  const handleTailClick = () => {
    setIsWagging(true);
    // Remove the wagging class after the animation is complete (1 second).
    setTimeout(() => {
      setIsWagging(false);
    }, 1000);
  };

  // Calculate the rotation for the dog's eyes to follow the mouse.
  const calculateEyeRotation = (eyeId) => {
    const eye = document.getElementById(eyeId);
    if (!eye) return '0deg';

    const rect = eye.getBoundingClientRect();
    const eyeX = rect.left + rect.width / 2;
    const eyeY = rect.top + rect.height / 2;
    const angle = Math.atan2(mousePosition.y - eyeY, mousePosition.x - eyeX);
    return `${angle * (180 / Math.PI) + 90}deg`;
  };

  // --- Effects ---
  // useEffect hook to handle the mousemove event for the dog's eyes.
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`portfolio-app ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Day/Night Mode Button */}
      <button className="mode-toggle-btn" onClick={toggleDarkMode}>
        {isDarkMode ? '☀️ Day Mode' : '🌙 Night Mode'}
      </button>

      {/* Header with Name and Photo */}
      <header className="hero-section section-animate">
        <div className="hero-content">
          <h1>Amrit Saini</h1>
          <p className="job-title">Fullstack Developer</p>
          <div className="profile-photo">
            {/* Placeholder for a profile photo */}
            <img src={profilePhoto} alt="Profile" />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section-animate">
        <div className="container">
          <h2>About Me</h2>
          <p>
            Innovative and results-driven Computer Science undergraduate with hands-on experience in AI, cloud computing, and full-stack web development using the MERN stack. Skilled in designing and deploying scalable web applications, integrating AI models, and leveraging cloud platforms like AWS for high-performance solutions. Proficient in React, Node.js, Express, MongoDB, Python, and machine learning frameworks, with a strong foundation in algorithms and data structures. Adept at collaborating in agile teams, optimizing system performance, and delivering user-centric applications. Passionate about building intelligent, cloud-native solutions that combine modern web technologies with AI capabilities to drive innovation and efficiency.
          </p>
        </div>
      </section>

      {/* Skills and Education Section */}
      <section id="intro" className="section-animate">
        <div className="container">
          <div className="card-container">
            {/* Skills Card */}
            <div className="card animated-card">
              <h3>Skills</h3>
              <ul>
                <li>Full Stack - MERN</li>
                <li>Cloud - AWS</li>
                <li>AI & Machine Learning</li>
                <li>Programming - C++ , Python</li>
                <li>Git & GitHub</li>
              </ul>
            </div>
            {/* Education Card */}
            <div className="card animated-card">
              <h3>Education</h3>
              <p>Bachelor of Technology in Computer Science</p>
              <p>VIT Bhopal University, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Pet Dog Section */}
      <section id="pet-dog-section" className="section-animate">
        <div className="container pet-container">
          <h2>My Interactive Pet Dog</h2>
          <p>Click on his tail to make him wag!</p>
          <div className="dog-container">
            <div className="dog-head">
              <div className="dog-ears"></div>
              <div className="dog-face">
                <div id="eye-left" className="dog-eye" style={{ transform: `rotate(${calculateEyeRotation('eye-left')})` }}>
                  <div className="dog-pupil"></div>
                </div>
                <div id="eye-right" className="dog-eye" style={{ transform: `rotate(${calculateEyeRotation('eye-right')})` }}>
                  <div className="dog-pupil"></div>
                </div>
              </div>
            </div>
            <div className="dog-body"></div>
            <div className={`dog-tail ${isWagging ? 'wag' : ''}`} onClick={handleTailClick}></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-animate">
        <div className="container">
          <h2>Projects</h2>
          <div className="project-grid">
            {/* Example Project Card */}
            <a href="https://github.com/Heisamrit/SYMPTOM-CHECKER-API" className="project-card animated-card" target="_blank" rel="noopener noreferrer">
              <h3>SYMPTOM-CHECKER-API</h3>
              <p>A full-stack web application that helps users input symptoms and fetch likely health-related insights using a responsive frontend and an API-powered backend.</p>
            </a>
            <a href="https://github.com/Heisamrit/Authentication-System-MERN-Stack-" className="project-card animated-card" target="_blank" rel="noopener noreferrer">
              <h3>Authentication-System-MERN-Stack</h3>
              <p>A full-stack authentication system using the MERN stack (MongoDB, Express.js, React, Node.js). It features user signup, login, bcrypt-based password hashing, JWT authentication, and protected routes. The backend handles security and validation, while the frontend ensures a smooth, responsive user experience.</p>
            </a>
            <a href="https://github.com/Heisamrit/FuelToFit" className="project-card animated-card" target="_blank" rel="noopener noreferrer">
              <h3>FuelToFit</h3>
              <p>FuelToFit Calorie Calculator is a React-based app to calculate daily calorie needs using BMR formulas. Features animated panels, range sliders, video branding, login/signup buttons, and dynamic results for maintenance, weight loss, and gain.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Social Media Links with GIFs */}
      <section id="social-media" className="section-animate">
        <div className="container">
          <h2>Connect with me</h2>
          <div className="social-links">
            <a href="https://github.com/Heisamrit" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.82-.262.82-.583 0-.287-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.238 1.838 1.238 1.07 1.836 2.81 1.305 3.492.997.109-.775.419-1.305.762-1.605-2.665-.3-5.466-1.333-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.52.129-3.18 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.045.138 3.006.404 2.29-1.552 3.298-1.23 3.298-1.23.668 1.66.263 2.877.128 3.18.77.84 1.235 1.91 1.235 3.22 0 4.609-2.805 5.624-5.475 5.923.43.372.823 1.102.823 2.222v3.293c0 .321.218.69.824.578C20.564 21.787 24 17.292 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/heisamrit" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.766s.784-1.766 1.75-1.766 1.75.79 1.75 1.766-.783 1.766-1.75 1.766zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href="#" onClick={(e) => handleGmailClick(e, 'heisamrit@gmail.com')} className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                <path d="M0 3.75v16.5c0 .69.56 1.25 1.25 1.25h21.5c.69 0 1.25-.56 1.25-1.25v-16.5c0-.69-.56-1.25-1.25-1.25h-21.5c-.69 0-1.25.56-1.25 1.25zm1.53 1.25l10.47 6.42 10.47-6.42h-20.94zm-.03 14h21v-12.98l-10.5 6.43-10.5-6.43v12.98z"/>
              </svg>
              <span>Gmail</span>
            </a>
          </div>
        </div>
      </section>

      {/* CSS for the entire application */}
      <style>
        {`
          /* Custom variables for color themes */
          :root {
            --bg-color: #f0f4f8;
            --text-color: #333;
            --primary-color: #3f51b5;
            --secondary-color: #ff9800;
            --card-bg: #fff;
            --card-border: #ccc;
            --shadow-color: rgba(0, 0, 0, 0.1);
            --animation-duration: 0.5s;
          }

          .dark-mode {
            --bg-color: #121212;
            --text-color: #e0e0e0;
            --primary-color: #bb86fc;
            --secondary-color: #ffc400;
            --card-bg: #1f1f1f;
            --card-border: #333;
            --shadow-color: rgba(0, 0, 0, 0.3);
          }

          /* General styling */
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Inter', sans-serif;
            transition: background-color 0.5s, color 0.5s, box-shadow 0.5s;
          }

          body, .portfolio-app {
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
            overflow-x: hidden;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 1rem;
          }

          .mode-toggle-btn {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 50px;
            cursor: pointer;
            font-size: 1rem;
            z-index: 100;
            box-shadow: 0 4px 6px var(--shadow-color);
            transition: transform 0.3s ease;
          }
          
          .mode-toggle-btn:hover {
            transform: scale(1.05);
          }

          /* Section animations */
          .section-animate {
            animation: fadeIn 1s ease-in-out forwards;
            opacity: 0;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Hero Section */
          .hero-section {
            text-align: center;
            padding-top: 5rem;
            padding-bottom: 2rem;
            background: linear-gradient(45deg, var(--bg-color), var(--primary-color) 70%);
            border-bottom-left-radius: 50px;
            border-bottom-right-radius: 50px;
            box-shadow: 0 8px 15px var(--shadow-color);
          }
          
          .dark-mode .hero-section {
            background: linear-gradient(45deg, var(--bg-color), #2c2c2c 70%);
          }

          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .hero-content h1 {
            font-size: 3rem;
            margin-bottom: 0.5rem;
            color: var(--secondary-color);
          }
          
          .job-title {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: 2rem;
          }

          .profile-photo img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 5px solid var(--secondary-color);
            box-shadow: 0 4px 10px var(--shadow-color);
            animation: photoPulse 2s infinite ease-in-out;
          }
          
          @keyframes photoPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          
          /* Cards and Sections */
          h2 {
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: 2rem;
            color: var(--primary-color);
          }
          
          .card-container {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
          }
          
          .card {
            background-color: var(--card-bg);
            border: 1px solid var(--card-border);
            padding: 2rem;
            border-radius: 20px;
            box-shadow: 0 4px 12px var(--shadow-color);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            max-width: 400px;
            width: 100%;
          }
          
          .animated-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }
          
          .card h3 {
            color: var(--primary-color);
            margin-bottom: 1rem;
          }
          
          .card ul {
            list-style-type: none;
            padding-left: 0;
          }
          
          .card li {
            margin-bottom: 0.5rem;
            position: relative;
            padding-left: 20px;
          }
          
          .card li::before {
            content: '●';
            color: var(--secondary-color);
            font-size: 1rem;
            position: absolute;
            left: 0;
            top: 2px;
          }
          
          /* Projects Grid */
          .project-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }
          
          .project-card {
            display: block;
            text-decoration: none;
            color: inherit;
            background-color: var(--card-bg);
            border: 1px solid var(--card-border);
            padding: 2rem;
            border-radius: 20px;
            box-shadow: 0 4px 12px var(--shadow-color);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }
          
          .project-card h3 {
            color: var(--primary-color);
            margin-bottom: 0.5rem;
          }
          
          .project-card p {
            font-size: 0.9rem;
          }
          
          /* Social Media */
          .social-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
          }
          
          .social-link {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
            color: var(--text-color);
            transition: transform 0.3s ease, color 0.3s ease;
            text-align: center;
          }

          .social-link:hover {
            transform: translateY(-5px);
            color: var(--primary-color);
          }
          
          .social-icon {
            width: 60px;
            height: 60px;
            transition: fill 0.3s ease;
            border-radius: 10px;
            padding: 5px;
            background-color: var(--card-bg);
            box-shadow: 0 4px 8px var(--shadow-color);
          }
          
          .social-icon:hover {
            transform: scale(1.1) rotate(5deg);
          }

          .dark-mode .social-icon {
            fill: var(--text-color);
          }

          .dark-mode .social-link:hover .social-icon {
            fill: var(--primary-color);
          }
          
          .social-link span {
            margin-top: 0.5rem;
          }
          
          /* Interactive Dog */
          .pet-container {
            text-align: center;
          }
          
          .dog-container {
            position: relative;
            width: 300px;
            height: 250px;
            margin: 2rem auto;
          }

          .dog-head {
            position: absolute;
            width: 150px;
            height: 120px;
            background-color: var(--primary-color);
            top: 40px;
            left: 75px;
            border-radius: 50% 50% 30% 30%;
            z-index: 2;
            animation: breathe 4s infinite ease-in-out;
          }

          @keyframes breathe {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
          }
          
          .dog-face {
            position: relative;
            top: 25px;
            display: flex;
            justify-content: space-around;
            width: 100%;
          }
          
          .dog-eye {
            width: 25px;
            height: 25px;
            background-color: var(--card-bg);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
          }
          
          .dog-pupil {
            width: 10px;
            height: 10px;
            background-color: black;
            border-radius: 50%;
            position: absolute;
            bottom: 5px;
          }
          
          .dog-ears {
            position: absolute;
            width: 100%;
            top: -20px;
            left: 0;
            display: flex;
            justify-content: space-between;
          }
          
          .dog-ears::before, .dog-ears::after {
            content: '';
            width: 60px;
            height: 80px;
            background-color: var(--secondary-color);
            border-radius: 50% 50% 0 0;
          }
          
          .dog-ears::before {
            transform: rotate(-30deg);
            left: -10px;
          }
          
          .dog-ears::after {
            transform: rotate(30deg);
            right: -10px;
          }
          
          .dog-body {
            position: absolute;
            width: 200px;
            height: 150px;
            background-color: var(--secondary-color);
            top: 100px;
            left: 50px;
            border-radius: 50% 50% 10% 10%;
            z-index: 1;
            box-shadow: inset 0 -5px 10px rgba(0, 0, 0, 0.2);
          }
          
          .dog-tail {
            position: absolute;
            width: 20px;
            height: 80px;
            background-color: var(--primary-color);
            top: 150px;
            right: 60px;
            border-radius: 50% 50% 0 0;
            cursor: pointer;
            transform-origin: bottom center;
            z-index: 2; /* Fix: Increased z-index to place the tail above the body */
            transition: transform 0.2s ease-in-out;
            box-shadow: inset 0 -5px 10px rgba(0, 0, 0, 0.2);
          }
          
          .dog-tail:hover {
            background-color: var(--primary-color);
            box-shadow: 0 0 10px var(--primary-color);
          }
          
          .dog-tail.wag {
            animation: wag 0.3s infinite alternate;
          }
          
          @keyframes wag {
            from { transform: rotate(-20deg); }
            to { transform: rotate(20deg); }
          }
          
          /* Responsive Design */
          @media (max-width: 768px) {
            .hero-content h1 {
              font-size: 2.5rem;
            }
            
            .job-title {
              font-size: 1.2rem;
            }
            
            .card-container {
              flex-direction: column;
              align-items: center;
            }
            
            .social-links {
              gap: 1rem;
            }
            
            .social-icon {
              width: 50px;
              height: 50px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default App;
