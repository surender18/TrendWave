import React, { useState } from 'react';
import './Dashboard.css';
import placeholder1 from '../../assets/placeholder1.png'
import placeholder2 from '../../assets/placeholder2.png'
const Dashboard = () => {
  const [data, setData] = useState({
    followers: 5200,
    engagement: '8.3%',
    topPost: 12500,
    comments: 320,
  });

  // Function to simulate data refresh
  const refreshData = () => {
    setData({
      followers: Math.floor(Math.random() * 10000) + 5000,
      engagement: (Math.random() * 10).toFixed(1) + '%',
      topPost: Math.floor(Math.random() * 15000) + 5000,
      comments: Math.floor(Math.random() * 500) + 100,
    });
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      

      {/* Main Content Area */}
      <main className="main-content">
        <header className="header">
          <h1>Dashboard Overview</h1>
          <button onClick={refreshData}>Refresh Data</button>
        </header>

        {/* Metrics Overview */}
        <section className="metrics-overview">
          <div className="metric-card">
            <h3>Follower Growth</h3>
            <p>{data.followers}</p>
          </div>
          <div className="metric-card">
            <h3>Engagement Rate</h3>
            <p>{data.engagement}</p>
          </div>
          <div className="metric-card">
            <h3>Top Post Reach</h3>
            <p>{data.topPost}</p>
          </div>
          <div className="metric-card">
            <h3>New Comments</h3>
            <p>{data.comments}</p>
          </div>
        </section>

        {/* Charts Section */}
        <section className="charts-section">
          <div className="chart-card">
            <h3>Engagement Over Time</h3>
            <div className="chart-placeholder"><img src={placeholder1} alt="" /></div>
          </div>
          <div className="chart-card">
            <h3>Audience Demographics</h3>
            <div className="chart-placeholder"><img src={placeholder2} alt="" /></div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
