import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div className="register-container">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <FormInput
          label="Name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange({ target: { name: 'name', value: e.target.value } })}
          placeholder="Enter your full name"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <FormInput
          label="Student ID"
          type="text"
          value={formData.studentId}
          onChange={(e) => handleChange({ target: { name: 'studentId', value: e.target.value } })}
          placeholder="Enter your student ID"
        />
        {errors.studentId && <p className="error">{errors.studentId}</p>}

        <FormInput
          label="Password"
          type="password"
          value={formData.password}
          onChange={(e) => handleChange({ target: { name: 'password', value: e.target.value } })}
          placeholder="Enter your password"
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <FormInput
          label="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => handleChange({ target: { name: 'confirmPassword', value: e.target.value } })}
          placeholder="Confirm your password"
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

        <div className="form-group">
          <label htmlFor="role" className="form-label">Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="Student">Student</option>
            <option value="Faculty">Faculty</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;