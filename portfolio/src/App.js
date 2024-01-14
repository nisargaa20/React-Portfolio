
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container mx-auto p-4">
      <header className="bg-red-700 text-white text-center py-8">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio!</h1>
      </header>
      <main className="flex flex-wrap p-4">
        <div className="photo flex-1 mr-8 overflow-hidden rounded-full shadow-md">
          <img src="/nisarga.jpg" alt="me" className="w-full h-auto rounded-full float-left transform transition-transform hover:scale-110" />
        </div>
        <div className="content flex-2 animation-fade-in text-black text-lg">
      
          <p>
            Hello, I'm Nisarga G R, a passionate developer with a strong background in web development.
            I love coding and developing websites. During my internship at the Suvidha foundation,
            I successfully completed projects and actively participated in web development hackathons,
            which further enhanced my skills.
          </p>
          <p>
            Currently, I am working at BitsGate as a Full Stack Developer. In this role, I am involved
            in developing various projects, contributing to multiple aspects of the development process.
            I have participated in numerous projects, gaining valuable experience in the dynamic field of web development.
          </p>
          <p>
            <strong>Skills:</strong> HTML, CSS, Javascript, React.js, node.js, SQL, MariaDB, DBeaver, C, Python, Java, Data Structures, and Algorithms.
          </p>
        </div>
      </main>
      <footer className="mt-auto bg-red-700 text-white text-center py-4">
        <p>&copy; 2024 My Portfolio | All Rights Reserved</p>
   
        <div className="social-links mt-4">
          <a href="linkedin.com/in/nisarga-g-r-856806242" target="_blank" rel="noopener noreferrer" className="text-white mr-4">
            LinkedIn
          </a>
          <a href="https://github.com/nisargaa20" target="_blank" rel="noopener noreferrer" className="text-white mr-4">
            GitHub
          </a>
          <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer" className="text-white">
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
