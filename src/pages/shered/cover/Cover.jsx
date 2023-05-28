import React from 'react';

const Cover = ({img,title,discription}) => {
    return (
        <div className="hero h-screen" style={{ backgroundImage: `url(${img})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content bg-black bg-opacity-50 w-full py-24">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{discription}</p>
          </div>
        </div>
      </div>
    );
};

export default Cover;