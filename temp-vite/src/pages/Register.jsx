import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import FormInput from '../components/FormInput';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    password: '',
    confirmPassword: '',
    role: 'Student',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.studentId.trim()) newErrors.studentId = 'Student ID is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Registration Data:', formData);
      navigate('/');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Student Registration</h2>
        <p className="subtitle">Create a new account</p>
        
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange({ target: { name: 'name', value: e.target.value } })}
            placeholder="Enter your full name"
          />
          {errors.name && <div className="error-message" style={{marginBottom: '1rem', padding: '0.5rem', fontSize: '0.8rem'}}>{errors.name}</div>}

          <FormInput
            label="Student ID"
            type="text"
            value={formData.studentId}
            onChange={(e) => handleChange({ target: { name: 'studentId', value: e.target.value } })}
            placeholder="Enter your student ID"
          />
          {errors.studentId && <div className="error-message" style={{marginBottom: '1rem', padding: '0.5rem', fontSize: '0.8rem'}}>{errors.studentId}</div>}

          <FormInput
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) => handleChange({ target: { name: 'password', value: e.target.value } })}
            placeholder="Enter your password"
          />
          {errors.password && <div className="error-message" style={{marginBottom: '1rem', padding: '0.5rem', fontSize: '0.8rem'}}>{errors.password}</div>}

          <FormInput
            label="Confirm Password"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleChange({ target: { name: 'confirmPassword', value: e.target.value } })}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && <div className="error-message" style={{marginBottom: '1rem', padding: '0.5rem', fontSize: '0.8rem'}}>{errors.confirmPassword}</div>}

          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: '0.375rem', fontSize: '1rem', backgroundColor: 'transparent', outline: 'none' }}
              required
            >
              <option value="Student">Student</option>
              <option value="Faculty">Faculty</option>
            </select>
          </div>

          <button type="submit" className="btn primary full-width">Register</button>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <p style={{ color: 'var(--text-muted)' }}>
            Already have an account? <Link to="/" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 500 }}>Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;