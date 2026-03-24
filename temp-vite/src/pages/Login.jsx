import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!studentId.trim() || !password.trim()) {
      setError('Student ID and Password cannot be empty.');
      return;
    }
    setError('');
    // Basic validation passed, navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Student Login</h2>
        <p className="subtitle">Welcome back, please sign in</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Student ID</label>
            <input 
              type="text" 
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="Enter your student ID"
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <div className="password-input-group">
              <input 
                type={showPassword ? 'text' : 'password'} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <button 
                type="button" 
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          
          <button type="submit" className="btn primary full-width">Login</button>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <p style={{ color: 'var(--text-muted)' }}>
            Don't have an account? <Link to="/register" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 500 }}>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
