// MovieCard.js
import React from 'react';
import { FaYoutube, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function MovieCard({ movie }) {
  return (
    <motion.div
      className="container my-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="row p-4 pe-lg-0 align-items-center rounded-3 border shadow-lg" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="col-lg-8 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis" style={{ color: '#333' }}>{movie.title}</h1>
          <p className="lead" style={{ color: '#555' }}>{movie.overview}</p>
          <div className="icons">
            <FaYoutube style={{ color: '#ff0000' }} />
            <FaStar style={{ color: '#ffd700' }} />
          </div>
        </div>
        <div className="col-lg-4 p-0 shadow-lg">
          <img
            className="rounded-lg-3"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width="330"
          />
        </div>
      </div>
    </motion.div>
  );
}

