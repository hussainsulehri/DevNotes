import React from 'react'

const About = () => {
  return (
    <div className="in-about-page">
      <div className="in-about-badge">
        <i className="fa-solid fa-circle-info"></i> About DevNotes
      </div>
      <h1 className="in-about-title">
        Your notes, <span>always with you</span>
      </h1>
      <p className="in-about-text">
        DevNotes is a secure, cloud-based note-taking app that helps you organize your thoughts, ideas, and tasks from any device. Powered by a modern MERN stack, your notes are synced in real time and protected with JWT authentication.
      </p>

      <div className="in-feature-grid">
        <div className="in-feature-card">
          <div className="in-feature-icon">🔒</div>
          <h4>Secure & Private</h4>
          <p>Your notes are protected with token-based authentication.</p>
        </div>
        <div className="in-feature-card">
          <div className="in-feature-icon">⚡</div>
          <h4>Lightning Fast</h4>
          <p>Instant CRUD operations with a React-powered frontend.</p>
        </div>
        <div className="in-feature-card">
          <div className="in-feature-icon">☁️</div>
          <h4>Cloud Synced</h4>
          <p>Access your notes from anywhere, anytime via MongoDB Atlas.</p>
        </div>
        <div className="in-feature-card">
          <div className="in-feature-icon">🏷️</div>
          <h4>Taggable Notes</h4>
          <p>Organize notes with custom tags for quick filtering.</p>
        </div>
      </div>
    </div>
  )
}

export default About