import React, { useState, useEffect } from 'react';
import './Trend.css';

const Trend = () => {
  const [trends, setTrends] = useState([
    { hashtag: '#ReactJS', mentions: 24500, growth: '15%' },
    { hashtag: '#JavaScript', mentions: 18000, growth: '10%' },
    { hashtag: '#WebDevelopment', mentions: 22000, growth: '8%' },
    { hashtag: '#TechTrends', mentions: 15000, growth: '20%' },
  ]);

  const [demographics, setDemographics] = useState([
    { group: '18-24', percentage: '40%' },
    { group: '25-34', percentage: '35%' },
    { group: '35-44', percentage: '15%' },
    { group: '45+', percentage: '10%' },
  ]);

  const [growthMetrics, setGrowthMetrics] = useState({
    followers: '8.3%',
    engagement: '5.7%',
    reach: '9.4%',
  });

  // Simulate dynamic data refresh
  useEffect(() => {
    const interval = setInterval(() => {
      setGrowthMetrics({
        followers: `${(Math.random() * 10).toFixed(1)}%`,
        engagement: `${(Math.random() * 10).toFixed(1)}%`,
        reach: `${(Math.random() * 10).toFixed(1)}%`,
      });
    }, 5000); // Refresh every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="trend-container">
      <header className="trend-header">
        <h1 className='title'>Trend Analysis</h1>
        <p>Stay updated on the latest trends and audience insights.</p>
      </header>

      {/* Trending Hashtags Section */}
      <section className="hashtag-section">
        <h2 className='SUBHEAD'>Trending Hashtags</h2>
        <div className="hashtags">
          {trends.map((trend, index) => (
            <div key={index} className="hashtag-card">
              <h3>{trend.hashtag}</h3>
              <p>Mentions: {trend.mentions}</p>
              <span className="growth-rate">Growth: {trend.growth}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Audience Demographics Section */}
      <section className="demographics-section">
        <h2 className='SUBHEAD'>Audience Demographics</h2>
        <div className="demographics">
          {demographics.map((demo, index) => (
            <div key={index} className="demographic-card">
              <h3>Age Group: {demo.group}</h3>
              <p>Percentage: {demo.percentage}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Growth Metrics Section */}
      <section className="growth-section">
        <h2 className='SUBHEAD'>Platform Growth Metrics</h2>
        <div className="growth-metrics">
          <div className="metric-card">
            <h3>Follower Growth</h3>
            <p>{growthMetrics.followers}</p>
          </div>
          <div className="metric-card">
            <h3>Engagement Rate</h3>
            <p>{growthMetrics.engagement}</p>
          </div>
          <div className="metric-card">
            <h3>Reach</h3>
            <p>{growthMetrics.reach}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trend;
