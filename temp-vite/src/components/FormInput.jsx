import React, { useState } from 'react';

const FormInput = ({ label, type, value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-group">
      <label htmlFor={label.toLowerCase().replace(' ', '-')} className="form-label">
        {label}
      </label>
      <div className="input-container">
        <input
          id={label.toLowerCase().replace(' ', '-')}
          type={type === 'password' && showPassword ? 'text' : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="form-input"
          required
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="password-toggle"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
    </div>
  );
};

export default FormInput;