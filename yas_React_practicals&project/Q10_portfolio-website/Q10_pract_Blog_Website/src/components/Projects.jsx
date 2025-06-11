import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A fully functional e-commerce platform with user authentication, product management, and payment integration.',
      image: 'https://th.bing.com/th/id/OIP.NH5_O2xWvXd3-UUJXtrrKQHaEJ?w=248&h=180&c=7&r=0&o=5&pid=1.7', // Replace with actual image URL
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my skills, projects, and contact information.',
      image: 'https://th.bing.com/th/id/OIP.4wsAxVNjaitv8pDEoxdtoAHaFj?w=209&h=180&c=7&r=0&o=5&pid=1.7', // Replace with actual image URL
    },
    {
      id: 3,
      title: 'Blog Platform',
      description: 'A blogging platform where users can create, edit, and share blog posts with a rich text editor.',
      image: 'https://th.bing.com/th/id/OIP.6rPAPew7xx2CGww-pd2mBAHaE7?w=275&h=183&c=7&r=0&o=5&pid=1.7s', // Replace with actual image URL
    }
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-4 mb-4" key={project.id}>
            <div className="card shadow-lg h-100">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href="#" className="btn btn-primary mt-auto">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;