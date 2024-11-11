import React, { useState } from 'react';
import './Content.css';

const Content = () => {
  const [postLink, setPostLink] = useState('');
  const [performanceData, setPerformanceData] = useState(null);

  const fetchPerformanceData = () => {
    // Simulate fetching performance data
    setPerformanceData({
      views: Math.floor(Math.random() * 10000),
      likes: Math.floor(Math.random() * 5000),
      shares: Math.floor(Math.random() * 1000),
      comments: Math.floor(Math.random() * 300),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPerformanceData();
  };

  return (
    <div className="content-container">
      <header className="content-header">
        <h1 className='title'>Content Performance Analyzer</h1>
        <p>Enter your social media post link to see its performance metrics.</p>
      </header>

      {/* Input Section */}
      <form onSubmit={handleSubmit} className="content-form">
        <input
          type="url"
          placeholder="Enter post URL"
          value={postLink}
          onChange={(e) => setPostLink(e.target.value)}
          required
        />
        <button type="submit">Analyze</button>
      </form>

      {/* Performance Data Section */}
      {performanceData && (
        <section className="performance-data">
          <h2>Performance Metrics</h2>
          <div className="metrics">
            <div className="metric-card">
              <h3>Views</h3>
              <p>{performanceData.views}</p>
            </div>
            <div className="metric-card">
              <h3>Likes</h3>
              <p>{performanceData.likes}</p>
            </div>
            <div className="metric-card">
              <h3>Shares</h3>
              <p>{performanceData.shares}</p>
            </div>
            <div className="metric-card">
              <h3>Comments</h3>
              <p>{performanceData.comments}</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Content;
