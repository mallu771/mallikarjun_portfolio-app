import React from 'react';

import shoppingImage from '../assets/shopping.jpg';
import todoImage from '../assets/todo.avif';
import weatherImage from '../assets/weather.jfif';

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-1  w-500" style={{ height: '60vh' }}>
      <div className="container">
        <h2 className=" text-center mb-3">Projects</h2>
        <div className="row">
          {/* Project cards here */}
          <div className="col-md-4 mb-2">
            <div className="card h-50 shadow">
              <img src={todoImage} className="card-img-top  h-25 w-100" alt="Project" />
              <div className="card-body">
                <h5 className="card-title">Todo App</h5>
                <p className="card-text">A CRUD-based Todo app built with React and Bootstrap.</p>
                <a href="https://github.com/mallu771/todo-react-bootstrap" className="btn btn-outline-primary btn-sm me-2">GitHub</a>
                <a href="https://todo-react-bootstrap.vercel.app/" className="btn btn-primary btn-sm">Live Demo</a>
              </div>
            </div>
          </div>
         <div className="col-md-4 mb-4">
            <div className="card h-50 shadow">
              <img src={weatherImage} className="card-img-top  h-25 w-100" alt="Project" />
              <div className="card-body">
                <h5 className="card-title">Weather Live Charts</h5>
                <p className="card-text"> Weather Live built with React and Bootstrap.</p>
                <a href="https://github.com/mallu771/temperature-chart-" className="btn btn-outline-primary btn-sm me-2">GitHub</a>
                <a href="https://temperature-chart.onrender.com/" className="btn btn-primary btn-sm">Live Demo</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-50 shadow">
                <img src={shoppingImage} alt="Shopping cart" className="img-fluid rounded mb-3 h-25 w-100"/>
              <div className="card-body">
                <h5 className="card-title">Shopping cart</h5>
                <p className="card-text">Shopping cart built with React and Bootstrap.</p>
                <a href="https://github.com/mallu771/shopping" className="btn btn-outline-primary btn-sm me-2">GitHub</a>
                <a href="https://ecommerce-store-five-tawny.vercel.app/" className="btn btn-primary btn-sm">Live Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
