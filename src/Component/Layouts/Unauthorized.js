import React from 'react';
import { Link } from 'react-router-dom';

const UnauthorizedPage = () => {
  return (
    <div className="unauthorized-page" style={styles.container}>
      <h1 style={styles.heading}>403 - Unauthorized</h1>
      <p style={styles.message}>
        You do not have permission to access this page. Please contact the administrator if you believe this is a mistake.
      </p>
      <Link to="/" style={styles.homeLink}>Go to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '3.125rem', // 50px
    backgroundColor: '#f8f9fa',
    borderRadius: '0.625rem', // 10px
    boxShadow: '0 0.25rem 0.5rem rgba(0,0,0,0.1)', // 4px 8px to rem
    width: '80%',
    maxWidth: '37.5rem', // 600px
    margin: '6.25rem auto', // 100px
  },
  heading: {
    fontSize: '2.25rem', // 36px
    fontWeight: 'bold',
    color: '#dc3545',
  },
  message: {
    fontSize: '1.125rem', // 18px
    marginBottom: '1.25rem', // 20px
    color: '#6c757d',
  },
  homeLink: {
    fontSize: '1rem', // 16px
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

export default UnauthorizedPage;
