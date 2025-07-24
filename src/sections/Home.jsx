import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="text-center p-5 bg-light flex flex-col justify-center items-center min-h-screen"
    >
      <div className="container">
        <h1 className="display-4 font-bold text-3xl md:text-5xl lg:text-6xl text-primary">
          Hi, I'm Mallikarjun Bajantri
        </h1>
        <p className="lead text-secondary text-lg md:text-xl mt-1 text-danger">
          Jr. Software Developer
        </p>
      </div>
    </section>
  );
};

export default Home;
